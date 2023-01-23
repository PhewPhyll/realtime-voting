import ReconnectingEventSource from "reconnecting-eventsource";
import config from "../config";

const es = new ReconnectingEventSource(config.apiUrlPrefix);

export default es