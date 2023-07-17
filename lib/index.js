/* eslint-disable no-undef */
import BasePlugin from "@uppy/core/lib/BasePlugin.js"
import { createId } from "@paralleldrive/cuid2"
// const Translator = require('@uppy/utils/lib/Translator');
// const { Provider, Socket } = require('@uppy/companion-client');
// const emitSocketProgress = require('@uppy/utils/lib/emitSocketProgress');
// const getSocketHost = require('@uppy/utils/lib/getSocketHost');
console.log("Test",BasePlugin);
import settle from "@uppy/utils/lib/settle"
import "@uppy/utils/lib/RateLimitedQueue"
const { DirectUpload } = require("@rails/activestorage")

export default class ActiveStorageUpload {
  
}
