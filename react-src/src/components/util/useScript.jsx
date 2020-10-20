import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    
    const keyScript=document.createElement('script');

    const node=document.createTextNode(`var ua = new apiRTC.UserAgent({
        uri:`+ process.env.RTCKEY+`
});`)

keyScript.appendChild(node)

    document.body.appendChild(keyScript);


    const script = document.createElement('script');
    
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(keyScript);

    }
  }, [url]);
};

export default useScript;