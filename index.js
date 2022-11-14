const telegramAPI = require("node-telegram-bot-api");

const api = "5611338168:AAHFAsw0wAtPV6JArnZdoK2kiNJkbMKxQq8";

const mainChannelID = -1001791155855;

const bot = new telegramAPI(api, { polling: true });

const msgDay = new Date().getDate();

const msgMonth = new Date().getMonth();

const msgYear = new Date().getFullYear();

const msgHour = new Date().getHours();

const msgMinute = new Date().getMinutes();

const msgSecond = new Date().getSeconds();

const time = `${msgHour}:${
  msgMinute < 10 ? "0" + msgMinute : msgMinute
} - ${msgDay}.${msgMonth}.${msgYear}`;

bot.setMyCommands([
  { command: "/start", description: "Landi-Landi o'yin boshlandi!!!" },
  { command: "/infome", description: "Siz haqingizda malumot" },
  { command: "/infobot", description: "Bot haqidagi malumot" },
  { command: "/send_anon", description: "Anonim xabar jonatish" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const botID = msg.chat.id;

  switch (text) {
    case "/start":
      await bot.sendMessage(
        botID,
        "KELING MEHMON) HUSH KELIBSIZ!!! \nEndi nima qilmoqchisiz?"
      );
      console.log(msg);
      break;
    case "/infome":
      await bot.sendMessage(
        botID,
        `YOU: 
Firstname: ${msg.from.first_name}
Lastname: ${msg.from.last_name ? msg.from.last_name : ""} 
Username: @${msg.from.username} 
Id: ${msg.from.id}`
      );
      console.log(msg);
      break;

    
    case "/infobot":
      await bot.sendMessage(
        botID,
        `ru 
 Этот бот создан для обшения анонимно ученикам 35 школы  
uz
 Bu bot ananimo gaplashishka 35 maktab uchun`
      );
      console.log(msg);
      break;
    case "/send_anon":
      await bot.sendMessage(
        botID,
        `Xabaringizni qoldiring...
Ex: HELLO WORLD !
      `
      );

      break;
    default:
      if (text.length > 3) {
        await bot.sendMessage(
          mainChannelID,
          `#${msg.message_id}
${text}
${time}
      `
        );
        console.log(msg);
      } else {
        await bot.sendMessage(botID, `Sal narmalniro narsa yoz yiban`);
      }
  }
});

// {
//   message_id: 121,
//   from: {
//     id: 596394784,
//     is_bot: false,
//     first_name: 'F O Z I L',
//     username: 'fozil_c1k',
//     language_code: 'ru'
//   },
//   chat: {
//     id: 596394784,
//     first_name: 'F O Z I L',
//     username: 'fozil_c1k',
//     type: 'private'
//   },
//   date: 1668422949,
//   text: '/infobot',
//   entities: [ { offset: 0, length: 8, type: 'bot_command' } ]
// }
