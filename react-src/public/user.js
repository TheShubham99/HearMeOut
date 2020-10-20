'use strict';


function updateAddressBook() {
    console.log("updateAddressBook");

    //var contactListArray = connectedSession.getContactsArray(),
    var contactListArray = connectedSession.getOnlineContactsArray(), //Get online contacts
        i = 0;

    console.log("contactListArray :", contactListArray);

    //Cleaning addressBook list
//        $("#addressBookDropDown").empty();
$("#userlist").html=""

    for (i = 0; i < contactListArray.length; i += 1) {
        var user = contactListArray[i];
        console.log("userId :", user.getId());
        //Checking if connectedUser is not current user befire adding in addressBook list
        if (user.getId() !== apiRTC.session.apiCCId) {
            $("#userlist").append('<button class="user-entry" href="#" onclick="callVideoHelper(' + user.getId() + ')">' + 'Anonymous' + '</button>');
        }
    }
}

function addStreamInDiv(stream, divId, mediaEltId,  muted) {
    
    var streamIsVideo = stream.hasVideo();
    console.error('addStreamInDiv - hasVideo? ' + streamIsVideo);

    var mediaElt = null,
        divElement = null,
        funcFixIoS = null,
        promise = null;

    if (streamIsVideo === 'false') {
        mediaElt = document.createElement("audio");
    } else {
        mediaElt=document.getElementById(divId)
    }

    mediaElt.id = mediaEltId;
    mediaElt.autoplay = true;
    mediaElt.muted = muted;
    mediaElt.style.width='100%'
    mediaElt.style.height='70%'

    funcFixIoS = function () {
        var promise = mediaElt.play();

        console.log('funcFixIoS');
        if (promise !== undefined) {
            promise.then(function () {
                // Autoplay started!
                console.log('Autoplay started');
                console.error('Audio is now activated');
                document.removeEventListener('touchstart', funcFixIoS);

                $('#status').empty().append('iOS / Safari : Audio is now activated');

            }).catch(function (error) {
                // Autoplay was prevented.
                console.error('Autoplay was prevented');
            });
        }
    };

    stream.attachToElement(mediaElt);

 //   divElement = document.getElementById(divId);
 //   divElement.appendChild(mediaElt);
    promise = mediaElt.play();

    if (promise !== undefined) {
        promise.then(function () {
            // Autoplay started!
            console.log('Autoplay started');
        }).catch(function (error) {
            // Autoplay was prevented.
            if (apiRTC.osName === "iOS") {
                console.info('iOS : Autoplay was prevented, activating touch event to start media play');
                //Show a UI element to let the user manually start playback

                //In our sample, we display a modal to inform user and use touchstart event to launch "play()"
                document.addEventListener('touchstart',  funcFixIoS);
                console.error('WARNING : Audio autoplay was prevented by iOS, touch screen to activate audio');
                $('#status').empty().append('WARNING : iOS / Safari : Audio autoplay was prevented by iOS, touch screen to activate audio');
            } else {
                console.error('Autoplay was prevented');
            }
        });
    }
}

function hangupCall(callId) {
    console.log("hangupCall :", callId);
    $('#hangup-' + callId).remove();
    //Getting call from ApiRTC call lists
    var call = connectedSession.getCall(callId);
    call.hangUp();
}

//Call establishment
function callVideoHelper(uid) {
    var contact = connectedSession.getOrCreateContact(uid);
    var call = contact.call();
    if (call !== null) {
        setCallListeners(call);
        addHangupButton(call.getId());
    } else {
        console.warn("Cannot establish call");
    }
}

function addHangupButton(callId) {
    // Display hangup button
    document.getElementById('hangup-user').style.display = 'block';
    $("#hangup-user").attr("onclick",'hangupCall(' + callId + ')');

    //$("#hangupButtons").append('<input id="hangup-' + callId + '" class="btn btn-danger" type="button" value="Hangup-' + callId + '" onclick="hangupCall(' + callId + ')" />');
}


function setCallListeners(call) {
    call
        .on("localStreamAvailable", function (stream) {
            console.log('localStreamAvailable');
            //document.getElementById('local-media').remove();
            addStreamInDiv(stream, 'local-container-user', 'local-media-' + stream.getId(), true);
            stream
                .on("stopped", function () { //When client receives an screenSharing call from another user
                    console.error("Stream stopped");
                    $('#local-media-' + stream.getId()).remove();
                });
        })
        .on("streamAdded", function (stream) {
            console.log('stream :', stream);
            addStreamInDiv(stream, 'remote-container-user', 'remote-media-' + stream.getId(), false);
        })
        .on('streamRemoved', function (stream) {
            // Remove media element
            document.getElementById('remote-media-' + stream.getId()).remove();
        })
        .on('userMediaError', function (e) {
            console.log('userMediaError detected : ', e);
            console.log('userMediaError detected with error : ', e.error);

            //Checking if tryAudioCallActivated
            if (e.tryAudioCallActivated === false) {
                $('#hangup-user').style.display='none';
                        }
        })
         .on('hangup', function () {
            $('#hangup-user').style.display='none';
        });
}




apiRTC.setLogLevel(10);

var connectedSession = null;

    //==============================
    // CREATE USER AGENT
    //==============================
    var ua = new apiRTC.UserAgent({
        uri: 'apzkey:a395323c8e1f6cf634a4fa5dd9028b3e'
    });
    
    //==============================
    // REGISTER
    //==============================
    
    var registerInformation = {};
    
    ua.register(registerInformation).then(function (session) {
        // Save session
        connectedSession = session;
    
        // Display user number
//        document.getElementById('my-number').innerHTML = 'Your number is ' + connectedSession.id;
    
        connectedSession
            .on("contactListUpdate", function (updatedContacts) { //display a list of connected users
                console.log("MAIN - contactListUpdate", updatedContacts);
                updateAddressBook();
            })
            //==============================
            // WHEN A CONTACT CALLS ME
            //==============================
            .on('incomingCall', function (invitation) {
                console.log("MAIN - incomingCall : ");
                //==============================
                // ACCEPT CALL INVITATION
                //==============================
                if(invitation.getCallType()=='audio'){ //When receiving an audio call 
                    var answerOptions = {
                        mediaTypeForIncomingCall : 'AUDIO' //Answering with audio only.
                    }
                    invitation.accept(null, answerOptions)
                        .then(function (call) {
                            setCallListeners(call);
                            addHangupButton(call.getId());
                        });
                } else { 
                    invitation.accept() //Answering with audio and video.
                    .then(function (call) {
                        setCallListeners(call);
                        addHangupButton(call.getId());
                    });
                }
    
            
            });
    }).catch(function (error) {
        // error
        console.error('User agent registration failed', error);
    });
    

