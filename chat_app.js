"use strict";
{

const p = new SimplePeer({initiator: location.hash === '#1', trickle: false });

  p.on('data', y => console.log("Data", y));

p.on('error', function (err) { console.log('error', err) })

  p.on('signal', function (data) {
    console.log('SIGNAL', JSON.stringify(data))
    document.querySelector('input[name="comment"]').value = JSON.stringify(data);
  })

  document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault()
    p.signal(document.querySelector('input[name="comment"]').value)
  })

  p.on('connect', function () {
    console.log('CONNECT')
    p.send('whatever' + Math.random())
  })

  p.on('data', function (data) {
    console.log('data: ' + data)
  })
}
