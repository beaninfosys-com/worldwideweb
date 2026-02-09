import React, { useEffect, useRef, useState } from 'react';
const JobBoard = () => {
    const iframeRef = useRef(null);
    const [height, setHeight] = useState(500);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.style.height = height + 'px';
        }
        const handleMessage = (event) => {
            if (event.data && event.data.type === 'JOBBOARD_RESIZE') {
                setHeight(event.data.height);
                if (iframeRef.current) {
                    iframeRef.current.style.height = event.data.height + 'px';
                }
            }
        }
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);
    return (
        <iframe
            ref={iframeRef}
            src='https://jobdashboard.hireko.ai/boardId/0c8ef557-3458-4784-9e4f-32c30b650f7d?ApiKey=d7f056b03c23-f4e9-4874-8543-755fe8c0eyJzdGFnZSI6ICJwcm9kIiwgInRlbmFudCI6ICJiZWFuaW5mbyJ9'
            style={{ width: '100%', border: 'none' }}
            scrolling='no'
            allowFullScreen={true}
        />
    );
}
export default JobBoard;
