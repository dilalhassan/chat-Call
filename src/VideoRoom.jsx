import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const VideoRoom = () => {
  const { id } = useParams();

  const meting = (element) => {
    // generate Kit Token
    const appID = 1511521405;
    const serverSecret = "191d8594e188b3124fdf0602640a58e6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "dilal"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          url: `http://localhost:5173/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return (
    <>
      <dev ref={meting} />
      {/* <dev>video_call</dev> */}
    </>
  )
}

export default VideoRoom;
