//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kennydegiant@gmail.com";
global.location = "Nairobi,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "254728511744,254728511744";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254728511744,254728511744";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254728511744,254728511744";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhwVjJKY0g1OVZxc2FvTjc0Vk1XMlQva3FYQ3NibWs3TDUrWmdlTFpuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTRmL2wrQUZuVkh4K015MFVnYnNkall5TDhiUUVNdHNENTNIaHVGZWoyST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUFl2RjNrcVJaVUtOTXV0VnM0YUx0UGFCYXlEd1Y2M2t1bVlZTC9XQTEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1dXYwNldWa0dCemJTQnIwZWdNZ3RORUZOZW5zVC9nVjVnV2VpU2VmZ3owPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Ga3NYb0dRMFovRXNxWEZoRkpDVENNcnI1NHN6UnZMby9RVnk0MnRZV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZqWCsySjg5alVIRDFGaDd1TnM2OUhOVnpkTjBYYTltQmJ5TDBPc2V0WGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic056eXhNSlZkcHhCT2ovVFJhMkNSeW5zVDBvOTZlRVpaWDZTNmRITFBHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVHSmdnclhzNXVNNXNVTnpKcFA2WXpycEZQbVVxUnErY281TFc0Nm5ubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVuWDJVZS92ejh6THNhSlBKZ3ZlVGNqYVR2RCtlWXh5Tk5Ja1B2MWpMaEtVYVQ4bjdiK0RWU3ArL0ptRjg3TWxuQiswTThMdEV3WDlhSGZpSi9vVmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6IithU3dSeE5jdm10WVBRYzI0amFEcGlVRjdiS0lXVXRGdXoyV3ZWaXVleUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlBxQnN5dndoUi1TRTgtMjdFWWN4ZEEiLCJwaG9uZUlkIjoiZDAxMzMyZDMtZTQ4Ni00NmMyLWFkOGEtMTYzMzBiZDk0ZDhjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY0S05JRnBWY2dOSXFKem9tc1VrR0FvYWtIOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbjBEcytuazJFZGlnbndQSEd5T3QxV2x5Sjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEI3TlZNQ04iLCJtZSI6eyJpZCI6IjI1NDcyODUxMTc0NDo0N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUxkcExZSEVQS0RtclVHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU21HTGFTMlhXVUw1VUdPdGx5ZHBLZ09HekFSL0g2RHhUOEhxcjd0QnlTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZXh2YWEzSjlBdUxTNjFkYzgyU1ZKTm10azBzYVAva2pQMXJWU3djNDdzY0t3ZEQvWXJnRjJiYUkxM1UzeU52NE1lUHZTTEJjSXZncm5NSitRNFQwQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkJ6WVVzQWYzMjBGS3ZLSDJlanZCRWZNTjVVNmhLTWVla1NXNjFjYXUwcnM1bmwrMWVLY245OXdnWVJWaHM1Q0hWWDRVYzFnM2diTDFTVWdrN3FUWWdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI4NTExNzQ0OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVwaGkya3RsMWxDK1ZCanJaY25hU29EaHN3RWZ4K2c4VS9CNnErN1Fja2oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIxODgyODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEJLIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧-𝗠𝗗",
  author: process.env.STICKER_AUTHOR || "𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝗞𝗘𝗡𝗕𝗘𝗔𝗦𝗧_𝗠𝗗",
  ownername: process.env.OWNER_NAME || "𝑲𝒆𝒏𝒃𝒆𝒂𝒔𝒕🥷",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


