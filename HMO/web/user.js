'use strict';

const APIuri = '/api/default/'

async function updateAddressBook() {
    console.log("updateAddressBook");

    var contactListArray = connectedSession.getOnlineContactsArray(), //Get online contacts
        i = 0;

  
    //Cleaning addressBook list

    $("#userlist").html=""

    var isExpert=false;

    for (i = 0; i < contactListArray.length; i += 1) {
        var user = contactListArray[i];
        //Checking if connectedUser is not current user befire adding in addressBook list
        
        
        if (user.getId() !== apiRTC.session.apiCCId) {

           await fetch(APIuri+`isExpert.json?name="`+user.getId().toString()+`"`)
            .then((message)=>{
                message.json()
                .then((expert)=>{
                    isExpert=expert["body"]; 
                    
                    if(isExpert){
                        $("#userlist").append(`<div class="user-entry"><img class="placeholder"> Expert<br></img><center><button class="btn-success" href="#" onclick="callVideoHelper(` + user.getId() + `)">` + `Connect </button></center></div>`);
                      }
             }).catch((err)=>{console.error("Failed to load online users :(")})   
            })
             .catch((err)=>{console.error("Failed to load online users :(")})            
        }
    }
}

function addStreamInDiv(stream, divId, mediaEltId,  muted) {
    
    var streamIsVideo = stream.hasVideo();
 
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
    mediaElt.style.height='100%'

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


}


function setCallListeners(call) {
    call
        .on("localStreamAvailable", function (stream) {
            console.log('localStreamAvailable');
            addStreamInDiv(stream, 'local-container-user', 'local-media-' + stream.getId(), true);
            stream
                .on("stopped", function () { 
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

apiRTC.setLogLevel(0);

var connectedSession = null;

    var ua = new apiRTC.UserAgent({
        uri: 'apzkey:a395323c8e1f6cf634a4fa5dd9028b3e'
    });
    
    
    var registerInformation = {};
    
    ua.register(registerInformation).then(function (session) {
        // Save session
        connectedSession = session;
    
    
        connectedSession
            .on("contactListUpdate", function (updatedContacts) { //display a list of connected users
                console.log("MAIN - contactListUpdate", updatedContacts);
                updateAddressBook();
            })
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
    

