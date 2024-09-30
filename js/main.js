
const r = new rive.Rive({
src: "./TEST_TextInput_Tacometer.riv",
canvas: document.getElementById("canvas"),
autoplay: true,
stateMachines: "State Machine 1",
onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    r.setTextRunValue("V_Speed_Run", "0 mph");
},
onStateChange: (e) => {
    console.log("Event %s", e.data[0]);
    speed_str = (Math.floor(Math.random()*100)).toString();
    r.setTextRunValue("V_Speed_Run", speed_str);
}
});

function v_refresh() {
    console.log("Timer Loop");
    speed_str = (Math.floor(Math.random()*100)).toString();
    r.setTextRunValue("V_Speed_Run", speed_str);
}

// Call Refresh every 1000 Milliseconds
window.setInterval(v_refresh, 1000);