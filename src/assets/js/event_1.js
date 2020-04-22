import {H5sEvent} from './h5sevent.js'
import store from '../../store/index'

//console.log("+++++++++++",store.state.Useport)
var callport=store.state.Useport;
let gEvent=[];
var e1=undefined;
function EventCB(event, userdata)
{
    var msgevent = JSON.parse(event);
    let timeitem={
            Token: msgevent.strDevToken,
            Type: msgevent.type,
            UUID:msgevent.strUUID,
            Time:msgevent.strTime,
            Detail:event,
        };
    gEvent.push(timeitem);
    //console.log("////////////",msgevent)
}
function events(){
    
    var wsroot = callport.ip+":"+callport.port;
    if (wsroot == undefined)
    {
        wsroot = this.$store.state.Useport.ip+":"+this.$store.state.Useport.port;
    }
    //console.log("wsroot",wsroot,window.location.protocol);
    var conf1 = {
        protocol: "http:", //http: or https:
        host:wsroot, //localhost:8080
        rootpath:'/', // '/'
        callback: EventCB, 
        userdata: null, // user data
        session: "session" //session got from login
    };
    e1 = new H5sEvent(conf1);
    //console.log("wsroot",conf1);
    e1.connect();
}
events();
export default{event,gEvent}