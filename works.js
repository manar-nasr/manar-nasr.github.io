// ===== نماذج أعمالي (غير يُدنين) =====
// visual = صورة البوست، caption = صورة الكابشن، link = لينك البوست
// categories = المجال: rossy, samir, lx, arena, misc
var GROUPS = {
 "rossy": {
  "name": "الجمال والعناية بالبشرة",
  "color": "var(--butter)"
 },
 "samir": {
  "name": "التسويق والذكاء الاصطناعي",
  "color": "var(--lilac)"
 },
 "lx": {
  "name": "السيارات والصيانة",
  "color": "var(--sky)"
 },
 "arena": {
  "name": "مسابقات المحتوى",
  "color": "var(--peach)"
 },
 "misc": {
  "name": "منتجات ومناسبات",
  "color": "var(--mint)"
 }
};
var BRANDS = {
 "rossy": {
  "name": "روزي"
 },
 "arena": {
  "name": "كونتنت آرينا"
 },
 "misc": {
  "name": "منار نصر"
 },
 "samir": {
  "name": "أحمد سمير",
  "title": "أحمد سمير، متخصص تسويق و AI",
  "about": "كاروسيلز Personal Branding بتشرح أدوات الذكاء الاصطناعي بلغة بسيطة.",
  "logo": "images/logo_samir.webp"
 },
 "lx": {
  "name": "LiqStream",
  "title": "LiqStream ليكستريم، مركز صيانة سيارات سعودي",
  "about": "كاروسيلز توعوية بتقرّب خدمات الصيانة لعملاء المركز في السعودية.",
  "logo": "images/logo_lx.webp"
 }
};
var WORKS = [
  {"visual": "images/rb1_v.webp", "caption": "images/rb1_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid02mvxueDWh7dRwYjf417sBdwQgKmhrTyWkcq3X8MQNdnsep3MEEc7kJp7o7yBn92i5l&id=61588373530778&rdid=Egr5ZMrNPpWPQcAc", "platform": "facebook"},
  {"visual": "images/rb2_v.webp", "caption": "images/rb2_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid0Rh4oLxmPW31q26B8qs76pGbztJFxWxTzPWh5MZdzt2ezfM7PUiB1JgVKYdrbJeBXl&id=61588373530778&rdid=WEsH11vpQqb1rHO7", "platform": "facebook"},
  {"visual": "images/rb3_v.webp", "caption": "images/rb3_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid0hJxsi6HvKtukdnwDbLysMsyStFVdaAmCfJFhmfVwtPASqq13Bvgc5h71pDwU6nHpl&id=61588373530778&rdid=EkFYSJEuS9nnXnHP", "platform": "facebook"},
  {"visual": "images/rb4_v.webp", "caption": "images/rb4_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/share/p/18UwbU9N1E/", "platform": "facebook"},
  {"visual": "images/rb5_v.webp", "caption": "images/rb5_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/share/p/17Nqc2Xd7q/", "platform": "facebook"},
  {"visual": "images/rb6_v.webp", "caption": "images/rb6_c.webp", "brand": "rossy", "group": "rossy", "categories": "rossy", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid02cW9cWDv2vmWQbDLQcfsbUViYaF7b6aoZfiVdhSShH46Dv9VQA6MwhxKYok4bwK2Bl&id=61588373530778&rdid=dHJugLzqXSfhxjBB", "platform": "facebook"},
  {"visual": "images/ai1_v.webp", "brand": "samir", "group": "samir", "categories": "samir", "link": "https://www.instagram.com/p/DYr_P1wDNIH/", "platform": "instagram"},
  {"visual": "images/ai2_v.webp", "brand": "samir", "group": "samir", "categories": "samir", "link": "https://www.instagram.com/p/DYkQAZgjD82/", "platform": "instagram"},
  {"visual": "images/ai3_v.webp", "brand": "samir", "group": "samir", "categories": "samir", "link": "https://www.instagram.com/p/DZ7zcugjaIw/", "platform": "instagram"},
  {"visual": "images/lx1_v.webp", "brand": "lx", "group": "lx", "categories": "lx", "link": "https://www.instagram.com/p/DYSZ76JCPVN/", "platform": "instagram"},
  {"visual": "images/lx2_v.webp", "brand": "lx", "group": "lx", "categories": "lx", "link": "https://www.instagram.com/p/DYQBnqmRxPM/", "platform": "instagram"},
  {"visual": "images/lx3_v.webp", "brand": "lx", "group": "lx", "categories": "lx", "link": "https://www.instagram.com/p/DX2P6nKgsXa/", "platform": "instagram"},
  {"visual": "images/ca1_v.webp", "caption": "images/ca1_c.webp", "brand": "arena", "group": "arena", "categories": "arena", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid0PfzYyhgzHniScz1Y9JZt2CCEBaMxUaetewrpsdcm8MGJxw8ArvQfoC9qoKt6dfubl&id=61574052792567&rdid=tlP01VbvJXELM9Or", "platform": "facebook"},
  {"visual": "images/ca2_v.webp", "caption": "images/ca2_c.webp", "brand": "arena", "group": "arena", "categories": "arena", "link": "https://www.facebook.com/permalink.php?story_fbid=pfbid0gsC1NGB7EHvzTyRF7PxeA6DbQP1nzrchfdupkxeC9BdT2gbJESUosPJXGufcYT8Ul&id=61574052792567&rdid=ugrChz2vNuNrypmh", "platform": "facebook"},
  {"visual": "images/ca3_v.webp", "caption": "images/ca3_c.webp", "brand": "arena", "group": "arena", "categories": "arena", "link": "https://www.facebook.com/story.php?story_fbid=122172668216801759&id=61574052792567&rdid=87ikP5PLCJXHtZlL", "platform": "facebook"},
  {"visual": "images/ca4_v.webp", "caption": "images/ca4_c.webp", "brand": "arena", "group": "arena", "categories": "arena", "link": "https://www.facebook.com/share/p/1AyVBnFXsQ/", "platform": "facebook"},
  {"visual": "images/m1_v.webp", "caption": "images/m1_c.webp", "brand": "misc", "group": "misc", "categories": "misc", "link": "https://www.facebook.com/share/p/1C4kir1imw/", "platform": "facebook"},
  {"visual": "images/m2_v.webp", "caption": "images/m2_c.webp", "brand": "misc", "group": "misc", "categories": "misc", "link": "https://www.facebook.com/share/p/1J2ytzHVNu/", "platform": "facebook"},
  {"caption": "images/m3_c.webp", "brand": "misc", "group": "misc", "categories": "misc", "link": "https://www.facebook.com/profile.php?id=61574052792567", "platform": "facebook", "linkText": "شوف حسابي على فيسبوك"},
  {"caption": "images/m4_c.webp", "brand": "misc", "group": "misc", "categories": "misc", "link": "https://www.facebook.com/profile.php?id=61574052792567", "platform": "facebook", "linkText": "شوف حسابي على فيسبوك"},
  {"caption": "images/m5_c.webp", "brand": "misc", "group": "misc", "categories": "misc", "link": "https://www.facebook.com/profile.php?id=61574052792567", "platform": "facebook", "linkText": "شوف حسابي على فيسبوك"}
];
