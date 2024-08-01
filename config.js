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
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Kenbeast:Kenbeast254.@atlascluster.heu1doj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic01CdWpqUm1QMStxWUpzL0c4T3pNK2h0WUl4OFdOLzYxa0VscGNaOGNWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpKTDhDTThyZU96MWVYL1I1TWY3SlJBUGZQOTUydG5lWlc0clJwRkd3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQWc2UDlydmZUVXJVM0cyOVUyZVdtTWRJemlPbDJIdXI5R1J1aEY4Tmx3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0K0ZuNEtsS01iVmlRSS84U0laRmVGbFQyYlR3eVJ3SkovWUhpYU1pSkRFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEZnpnQXd3Rnh2MlRRUkozaDcrY3VjNndsYm15eGRZQThoRWNxT0UxM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imt4YzQxZVJIeVZPUU1xT2NEWTNYUXpCeXlhKy9vcEtCZk1nMERPcDVHV1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0prajVoZElvV2NZUVVpbWhsclhTcFJScnFFd1hSZ2E0alRZRlBXNUxHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhBSGF1MzQvWDVVOTk5dk5yMExpNUs0M3VydlhYNjBscGNCbWlWbE9WQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKL2xVZUw4dThhY3BFZ1pBaWlncHkvNzFFWGgycHNuQ0lUZFhRM3VGNGxpTUw1R01aa3JPcitDTnEwSS9sSDZYUHpCeHMrUkxrVlF0UTM2QjNoQ0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IlJ4UXFwRmR1aXpXZVVmR1lVNGdiNTk3dWR4MTBvbHNrN2pLTk9oVFc3RWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBWa1VVTmtlUVp5UTMtVndPUmdSS3ciLCJwaG9uZUlkIjoiOGIxODllNWMtNzJhZC00ZWEwLWFlNWMtNzIzMTFlMGFlMzBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlCQlJqeEpLZmd1aTlHUjkyYnVnTzM4Q1FOQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeW9PSWpwM2FqdjNycE9xaEp0aEZVemVPUkU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREwxN1FMUjQiLCJtZSI6eyJpZCI6IjI1NDcyODUxMTc0NDo0OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUxkcExZSEVLSEpyYlVHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiU21HTGFTMlhXVUw1VUdPdGx5ZHBLZ09HekFSL0g2RHhUOEhxcjd0QnlTTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZ05wZ2hyMDVUaXpDWEphcjgvdUZUSVFiSkJyZ1RGZVdyU2NBSkNFMUpJM0huUjA1L2N1TUpIUXREZXk4bWVmQlMvRnh6aDFqMHlJTzVZZndWZWJDRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkZpTUZINVJIWHRDb2ZUQ1JDT2FOMzl5NmQ5dkVjMk52emFaVEF0QWt4OTV1TTdLbnZ4ZnMrUE9MRmxkSzY3Qm9lV2xNTWdhSThJTjVyeTRMend3WEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzI4NTExNzQ0OjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVwaGkya3RsMWxDK1ZCanJaY25hU29EaHN3RWZ4K2c4VS9CNnErN1Fja2oifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI1MDg0NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEJLIn0="
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


