"use strict";
{
  chrome.runtime.onMessage.addListener( (msg, sender, reply) => {
    console.log("MSG", msg);
  });
}
