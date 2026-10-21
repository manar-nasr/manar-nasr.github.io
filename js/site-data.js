// ===== بيانات الموقع (منار نصر) =====
// كل نص: {ar, en}. بيانات البوستات نفسها في works.js (GROUPS / BRANDS / WORKS / FILTERS).

var CONTACT = {
  whatsapp: "201123940642",
  phone: "01123940642",
  email: "manar.contentcreator@gmail.com",
  linkedin: "https://www.linkedin.com/in/manar-nasr-282047370/",
  facebook: "https://www.facebook.com/profile.php?id=61574052792567"
};

// ألوان الطوابع (ثيم الطيارات الورق)
var INK = ["var(--c-red)", "var(--c-teal)", "var(--c-sun)", "var(--c-lilac)", "var(--c-rose)", "var(--c-sky)", "var(--c-green)"];

// ===== خريطة الإبداع: المجالات =====
var INDUSTRIES = [
  { slug: "beauty", icon: "🌸", filters: ["papermints", "rossy", "permanent_care"],
    name: { ar: "الجمال والعناية الشخصية", en: "Beauty & Personal Care" },
    desc: { ar: "من روتين البشرة والشعر، لابتسامة أكثر إشراقًا وانتعاش يدوم طول اليوم.", en: "From skin and hair routines to a brighter smile and freshness that lasts all day." } },
  { slug: "coffee", icon: "☕", filters: ["cb"],
    name: { ar: "القهوة والمشروبات", en: "Coffee & Drinks" },
    desc: { ar: "محطة التذوق.. حيث تتحول محاصيل القهوة المختصة لأبطال بطولة كاملة.", en: "The tasting stop.. where specialty coffee beans become the heroes of a full tournament." } },
  { slug: "fashion", icon: "👗", filters: ["udnyn"],
    name: { ar: "الأزياء والزي الشرعي", en: "Modest Fashion" },
    desc: { ar: "أناقة محتشمة بتحكي قيم البراند قبل ما تبيع القطعة.", en: "Modest elegance that tells the brand's values before selling the piece." } },
  { slug: "medical", icon: "🩺", filters: ["dr_abdulrahman"],
    name: { ar: "الطب والصحة", en: "Medical & Health" },
    desc: { ar: "تبسيط المفاهيم الطبية وبناء ثقة المرضى بمحتوى واضح وقريب.", en: "Simplifying medical concepts and building patient trust with clear, relatable content." } },
  { slug: "websites", icon: "🌐", filters: ["websites"],
    name: { ar: "محتوى المواقع", en: "Website Content" },
    desc: { ar: "محتوى مواقع كاملة، من هيكلة الصفحات وتوجيه التصاميم لحد المحتوى والمدونة.", en: "Complete website copy, from page structure and design direction to the content and the blog." } },
  { slug: "marketing", icon: "🚀", filters: ["milaknight_uk", "milaknight_gulf", "samir"],
    name: { ar: "التسويق الرقمي والذكاء الاصطناعي", en: "Digital Marketing & AI" },
    desc: { ar: "رسائل لوكالات تسويق في بريطانيا والخليج، وكاروسيلز بتشرح أدوات الذكاء الاصطناعي ببساطة.", en: "Messaging for marketing agencies in the UK and the Gulf, plus carousels that explain AI tools simply." } },
  { slug: "home-auto", icon: "🛋️", filters: ["sofa_studio", "lx"],
    name: { ar: "البيت والسيارات", en: "Home & Auto" },
    desc: { ar: "قصة الصناعة السعودية من أول قطعة أثاث، لحد صيانة سيارتك قبل حر الصيف.", en: "The story of Saudi manufacturing from the first furniture piece, to servicing your car before summer heat." } },
  { slug: "creative", icon: "🏆", filters: ["arena", "misc"],
    name: { ar: "المسابقات والإعلانات الإبداعية", en: "Competitions & Creative Ads" },
    desc: { ar: "تحديات كتابة وأفكار إعلانية بأسلوب قصصي، منها مركز ضمن أفضل 3 من 1000 مشاركة.", en: "Writing challenges and storytelling ad ideas, including a Top 3 spot out of 1,000 entries." } }
];

// لون كل براند + "شغلنا مع البراند" + اسم إنجليزي
var BRAND_META = {
  papermints:      { color: "hsl(190 60% 38%)", en: "PaperMints", tags: [["📱", "السوشيال ميديا", "Social media"], ["🎬", "الفيديوهات والسكريبتات", "Videos & scripts"], ["🧭", "استراتيجية السوقين", "Two-market strategy"]] },
  cb:              { color: "hsl(25 55% 35%)",  en: "C&B", tags: [["📣", "حملة تشويقية", "Teaser campaign"], ["🎬", "سلسلة Reels", "Reels series"], ["📱", "بوستات", "Posts"]] },
  udnyn:           { color: "hsl(340 45% 45%)", en: "Yadnin", tags: [["👥", "جروب فيسبوك", "Facebook group"], ["🌙", "كامبين رمضان", "Ramadan campaign"], ["📚", "محتوى تعليمي", "Educational content"]] },
  rossy:           { color: "hsl(330 55% 52%)", en: "Rossy Beauty", tags: [["📱", "صفحة فيسبوك", "Facebook page"], ["🧴", "باكيدجات المنتجات", "Product bundles"], ["📚", "محتوى توعوي", "Awareness content"]] },
  permanent_care:  { color: "hsl(270 45% 50%)", en: "Permanent Care", tags: [["📱", "بوستات إنستجرام", "Instagram posts"], ["🌍", "عربي وإنجليزي", "Arabic & English"]] },
  dr_abdulrahman:  { color: "hsl(170 45% 33%)", en: "Dr. Abdulrahman Al-Sayegh", tags: [["🩺", "محتوى طبي توعوي", "Medical awareness"], ["👤", "Personal Branding", "Personal branding"]] },
  websites:        { color: "hsl(120 35% 36%)", en: "Website Content", tags: [["🌐", "محتوى المواقع", "Website copy"], ["🧱", "هيكلة الصفحات", "Page structure"], ["✍️", "المدونة", "Blog"]] },
  milaknight_uk:   { color: "hsl(260 40% 45%)", en: "MilaKnight UK", tags: [["🇬🇧", "سوق بريطانيا", "UK market"], ["🎠", "كاروسيل", "Carousels"], ["📱", "بوستات", "Posts"]] },
  milaknight_gulf: { color: "hsl(150 40% 33%)", en: "MilaKnight Gulf", tags: [["🎬", "سكريبتات فيديو", "Video scripts"], ["🌍", "أسواق الخليج", "Gulf markets"]] },
  samir:           { color: "hsl(220 50% 40%)", en: "Ahmed Samir", tags: [["🎠", "كاروسيلز", "Carousels"], ["🤖", "أدوات الذكاء الاصطناعي", "AI tools"]] },
  sofa_studio:     { color: "hsl(30 45% 38%)",  en: "Sofa Studio", tags: [["📱", "بوستات", "Posts"], ["🎬", "فيديو", "Video"], ["🏭", "قصة الصناعة", "Manufacturing story"]] },
  lx:              { color: "hsl(205 70% 38%)", en: "LiqStream", tags: [["🎠", "كاروسيلز توعوية", "Awareness carousels"], ["📱", "بوستات", "Posts"]] },
  arena:           { color: "hsl(15 70% 48%)",  en: "Content Arena — On Track", tags: [["🏆", "تحدي كتابة", "Writing challenge"], ["📖", "Storytelling", "Storytelling"]] },
  misc:            { color: "hsl(160 45% 36%)", en: "Ads & Creative Work", tags: [["💡", "أفكار إعلانية", "Ad ideas"], ["✍️", "كوبي رايتنج", "Copywriting"]] }
};

// ===== دراسات الحالة (تظهر داخل صفحة المجال تحت البراند) =====
var CASES = {
  papermints: {
    no: 1, meta: [{ ar: "حسابين سوشيال ميديا", en: "2 social accounts" }, { ar: "6 شهور محتوى", en: "6 months of content" }, { ar: "6.4M+ مشاهدة", en: "6.4M+ views" }],
    steps: [
      { t: { ar: "التحدي", en: "The Challenge" }, i: "📍", p: { ar: "كان المطلوب إطلاق حسابين جديدين لـ PaperMints في السعودية والإمارات، وتقديم المنتج العالمي بطريقة قريبة من الجمهور في كل سوق. التحدي لم يكن في ترجمة المحتوى أو تكراره، بل في بناء حضور محلي حقيقي للعلامة؛ يحافظ على هويتها، وفي نفس الوقت يعكس لغة الناس، ومواقفهم اليومية، والمناسبات والسياق الثقافي لكل دولة.", en: "The brief was to launch two new PaperMints accounts in Saudi Arabia and the UAE, presenting the global product in a way that felt close to the audience in each market. The challenge wasn't translating or repeating content, but building a genuinely local presence for the brand; one that kept its identity while reflecting people's language, daily situations, occasions, and cultural context in each country." } },
      { t: { ar: "الاستراتيجية", en: "The Strategy" }, i: "🧭", p: { ar: "بدأت بدراسة السوق والمنافسين وسلوك الجمهور في كل دولة، لفهم الفرص المتاحة، وطريقة تقديم المنتج، والمواقف الأكثر ارتباطًا باستخدامه. وبناءً على نتائج البحث، طورت استراتيجية مستقلة لكل سوق، شملت الرسائل التسويقية، ونبرة التواصل، واتجاهات المحتوى، وأنواع الفيديوهات، وخطة الإعلانات.", en: "I started by studying the market, competitors, and audience behavior in each country, to understand the available opportunities, the best way to present the product, and the situations most linked to its use. Based on the research, I developed an independent strategy for each market, covering marketing messages, tone of voice, content directions, video formats, and the ad plan." } },
      { t: { ar: "التنفيذ", en: "The Execution" }, i: "🎬", p: { ar: "محتوى مرتبط بالحياة اليومية. لم نقدّم PaperMints كمنتج منفصل عن حياة الجمهور، بل ربطناه بالمواقف التي يحتاجه فيها بالفعل: قبل الاجتماعات ومقابلات العمل، بعد القهوة والوجبات، أثناء التنقل والسفر، في الخروجات والمناسبات، خلال أيام الصيف، وضمن المناسبات الوطنية والمحتوى الموسمي.", en: "Content tied to real daily life. We didn't present PaperMints as a product separate from the audience's life, but linked it to the situations where they actually need it: before meetings and job interviews, after coffee and meals, while commuting and traveling, on outings and occasions, during summer days, and within national occasions and seasonal content." } },
      { t: { ar: "النتيجة", en: "The Result" }, i: "🍃", res: true, p: { ar: "خلال أول 6 شهور، حققت الحسابات أكتر من 6.4 مليون مشاهدة مجمعة، وتخطى 35 فيديو من أصل 43 فيديو منشور حاجز 200 ألف مشاهدة، من مزيج متكامل: ASMR، الرسوم المتحركة، Lifestyle وUGC، تصوير المنتجات، CGI وثلاثي الأبعاد، والحملات الموسمية والمحلية.", en: "Within the first 6 months, the accounts achieved over 6.4 million combined views, and 35 out of 43 published videos crossed the 200K-view mark, from an integrated mix: ASMR, motion graphics, Lifestyle and UGC, product shots, CGI and 3D, and seasonal and local campaigns." } }
    ],
    band: [
      { b: "6", s: { ar: "شهور", en: "months" }, m: { ar: "لتحقيق النتائج", en: "to achieve results" } },
      { b: "2", s: { ar: "حساب", en: "accounts" }, m: { ar: "أُطلقا من الصفر", en: "launched from scratch" } },
      { b: "35/43", s: { ar: "فيديو", en: "videos" }, m: { ar: "تخطى 200 ألف مشاهدة", en: "crossed 200K views" } },
      { b: "6.4M+", s: { ar: "مشاهدة", en: "views" }, m: { ar: "خلال 6 شهور", en: "in 6 months" }, hl: true }
    ],
    ring: { pct: 81, t: { ar: "35 من 43 فيديو تخطوا 200 ألف مشاهدة", en: "35 of 43 videos crossed 200K views" }, p: { ar: "أداء ثابت ومستمر عبر أشكال محتوى متنوعة (ASMR، لايف ستايل وUGC، CGI وثلاثي الأبعاد)، مش فيديو واحد \"ضرب\" والباقي واقف مكانه.", en: "Steady, consistent performance across varied content formats (ASMR, lifestyle & UGC, CGI and 3D) — not just one video \"hitting\" while the rest stood still." } }
  },
  cb: {
    no: 2, meta: [{ ar: "Teaser Campaign", en: "Teaser Campaign" }, { ar: "8 فيديوهات", en: "8 videos" }, { ar: "274K+ مشاهدة", en: "274K+ views" }],
    steps: [
      { t: { ar: "الهدف والفكرة", en: "Goal & Concept" }, i: "📍", p: { ar: "استغلال زخم كأس العالم في السعودية لإطلاق حملة تشويقية ترفع الوعي والتفاعل. ابتكرنا بطولة \"C&B Beans Match\"؛ منافسة إقصائية حماسية بين محاصيل القهوة بأجواء الملاعب (من الأدوار التمهيدية حتى تتويج المحصول البطل \"ماناناسي\") لربط الجمهور بالحساب وتشويقهم لمعرفة الفائز في كل جولة.", en: "Capitalizing on World Cup buzz in Saudi Arabia to launch a teaser campaign that raises awareness and engagement. We created the \"C&B Beans Match\" tournament; a knockout competition between coffee beans with a stadium vibe (from the group stages up to crowning the champion bean, \"Mananasi\") to bond the audience with the account and keep them hooked for each round's winner." } },
      { t: { ar: "التنفيذ", en: "Execution" }, i: "🎬", p: { ar: "الكامبين انطلقت في 15 يونيو وانتهت في 21 يوليو: بوستين تشويقيين يفتحوا الفضول، يتبعهم 8 فيديوهات على شكل مباريات إقصائية بين محاصيل القهوة، من الدور التمهيدي لحد النهائي وإعلان الفائز.", en: "The campaign ran from June 15 to July 21: two teaser posts to spark curiosity, followed by 8 videos styled as knockout matches between coffee beans, from the opening round through the final and the winner announcement." } },
      { t: { ar: "ليه البطولة؟", en: "Why a tournament?" }, i: "⚽", p: { ar: "فكرة الـ\"Beans Match\" حوّلت المنتج لشخصية الجمهور بيتابعها زي فريقه المفضل، وخلّته يرجع كل جولة يشوف مين المحصول اللي هيتأهل، من غير ما يحس إنه قدام إعلان تقليدي.", en: "The \"Beans Match\" concept turned the product into a character the audience followed like their favorite team, bringing them back every round to see which bean would advance — without it ever feeling like a traditional ad." } },
      { t: { ar: "النتيجة", en: "The Result" }, i: "🍃", res: true, p: { ar: "274,000+ مشاهدة إجمالية لسلسلة فيديوهات الحملة (8 Reels)، وتصدرت الفيديوهات بـ 66.9K و51.6K و50.4K مشاهدة، مع آلاف المشاركات والتصويتات في التعليقات، وزيادة ملحوظة في المتابعين الجدد لمتابعة نتائج البطولة.", en: "274,000+ combined views across the campaign's 8 Reels, with top videos at 66.9K, 51.6K and 50.4K views, thousands of comments and votes, and a notable rise in new followers keeping up with the tournament." } }
    ],
    band: [
      { b: "274K+", s: { ar: "مشاهدة", en: "views" }, m: { ar: "إجمالية للحملة", en: "total for the campaign" }, hl: true },
      { b: "66.9K", s: { ar: "أعلى مشاهدات", en: "highest views" }, m: { ar: "لفيديو واحد", en: "for a single video" } },
      { b: "8", s: { ar: "فيديوهات", en: "videos" }, m: { ar: "Reels", en: "Reels" } },
      { b: "5", s: { ar: "أسابيع", en: "weeks" }, m: { ar: "مدة الحملة", en: "campaign duration" } }
    ],
    bars: { t: { ar: "أداء فيديوهات حملة C&B Beans Match", en: "C&B Beans Match video performance" }, s: { ar: "مشاهدات كل فيديو من إحصائيات الحملة نفسها", en: "Views per video, straight from the campaign's own stats" },
      items: [["66.9K", 100, "تيزر الحملة", "Teaser"], ["51.6K", 77, "نصف النهائي", "Semi-final"], ["50.4K", 75, "تيزر الحملة", "Teaser"], ["34.2K", 51, "نصف النهائي", "Semi-final"], ["31.7K", 47, "النهائي", "Final"], ["30.6K", 46, "الجولة 3", "Round 3"], ["24.5K", 37, "الجولة التمهيدية", "Opening round"]] }
  },
  udnyn: {
    no: 3, link: "https://www.facebook.com/udnynstore", meta: [{ ar: "جروب فيسبوك", en: "Facebook group" }, { ar: "28 يوم محتوى", en: "28 days of content" }, { ar: "كامبين رمضان", en: "Ramadan campaign" }],
    steps: [
      { t: { ar: "التحدي", en: "The Challenge" }, i: "📍", p: { ar: "براند زي شرعي عنده عملاء Offline كويسين، لكن الجروب كان شبه ساكت: 13 منشور و171 تفاعل بس في أول 5 أسابيع من السنة. ومفيش محتوى مرئي ولا ميزانية إعلانات، والمنافسين سابقين.", en: "A modest-fashion brand with a good offline customer base, but its Facebook group was nearly silent: just 13 posts and 171 interactions in the first 5 weeks of the year. No visual content, no ad budget, and competitors already ahead." } },
      { t: { ar: "الاستراتيجية", en: "The Strategy" }, i: "🧭", p: { ar: "منبيعش قطعة شكلها حلو؛ بنبيع إحساس الراحة والأمان والاقتداء بنساء المؤمنين. والأساس: توعية بقيم البراند، محتوى تعليمي يبني ثقة، وTOV قريب من البنات.", en: "We're not selling a nice-looking piece; we're selling a feeling of comfort, security, and following the example of the believing women. The foundation: awareness of the brand's values, educational content that builds trust, and a tone of voice close to the girls themselves." } },
      { t: { ar: "التنفيذ", en: "The Execution" }, i: "✍️", p: { ar: "28 يوم محتوى بمعدل نشر أعلى: بوستات بيعية وتعليمية ومتخصصة ومناسبات، وكامبين رمضان تفاعلية \"اقتدي بها\" لمدة 7 أيام.", en: "28 days of content at a higher posting rate: sales, educational, specialized, and occasion-based posts, plus a 7-day interactive Ramadan campaign, \"Follow Her Example\"." } },
      { t: { ar: "النتيجة", en: "The Result" }, i: "🍃", res: true, p: { ar: "الجروب اتحرك فعلًا: التفاعلات زادت 838% والتعليقات 829%، والمبيعات زادت 150%، والجروب وصل لـ 1,050 عضو، من غير ولا جنيه إعلانات.", en: "The group genuinely came alive: engagement rose 838% and comments 829%, sales grew 150%, and the group reached 1,050 members — without spending a single pound on ads." } }
    ],
    band: [
      { b: "+838%", s: { ar: "تفاعلات", en: "engagements" }, m: { ar: "من 171 لـ 4,138", en: "from 171 to 4,138" }, hl: true },
      { b: "+829%", s: { ar: "تعليقات", en: "comments" }, m: { ar: "من 109 لـ 3,388", en: "from 109 to 3,388" } },
      { b: "+150%", s: { ar: "مبيعات", en: "sales" }, m: { ar: "بعد تطبيق الخطة", en: "after applying the plan" } },
      { b: "1,050", s: { ar: "عضو", en: "members" }, m: { ar: "في الجروب", en: "in the group" } }
    ],
    proof: [
      { img: "images/res_before.webp", b: { ar: "قبل:", en: "Before:" }, d: { ar: "1 يناير – 6 فبراير 2026", en: "Jan 1 – Feb 6, 2026" }, s: { ar: "13 منشور، 109 تعليق، 171 تفاعل", en: "13 posts, 109 comments, 171 interactions" } },
      { img: "images/res_after.webp", b: { ar: "بعد:", en: "After:" }, d: { ar: "7 فبراير – 31 مارس 2026", en: "Feb 7 – Mar 31, 2026" }, s: { ar: "135 منشور، 3,388 تعليق، 4,138 تفاعل", en: "135 posts, 3,388 comments, 4,138 interactions" } }
    ],
    camp: { t: { ar: "كامبين رمضان: \"اقتدي بها\"", en: "Ramadan Campaign: \"Follow Her Example\"" }, rows: [
      [{ ar: "المشكلة", en: "The Problem" }, { ar: "جمهور بيتابع في صمت، والتفاعل الحقيقي قليل.", en: "An audience that followed in silence, with little real engagement." }],
      [{ ar: "الفكرة", en: "The Idea" }, { ar: "7 أيام في رمضان، كل يوم سؤال عن موقف ملهم لأمهات المؤمنين والصحابيات، بيفتح \"فجوة فضول\" ويخلّي البنات يشاركوا بالإجابة في الكومنتات، مع جوايز للمتفاعلين.", en: "7 days in Ramadan, each day a question about an inspiring moment from the Mothers of the Believers and female companions — opening a \"curiosity gap\" that got girls answering in the comments, with prizes for those who engaged." }],
      [{ ar: "الهدف", en: "The Goal" }, { ar: "رفع التفاعل الطبيعي، وربط البراند بقيمه الأساسية: الحجاب، العفة، والحياء.", en: "Raise genuine engagement, and tie the brand to its core values: hijab, modesty, and decency." }],
      [{ ar: "النتيجة", en: "The Result" }, { ar: "+150% تفاعل في التعليقات والمشاركات اليومية، والبراند اترسّخ كداعم لقيم الحياء والأناقة المحتشمة، والتفاعل كمّل بعد ما الكامبين خلصت.", en: "+150% engagement in daily comments and shares, and the brand became known as a champion of modest elegance — with engagement continuing after the campaign ended." }]
    ] }
  },
  rossy: {
    no: 4, link: "https://www.facebook.com/profile.php?id=61588373530778", meta: [{ ar: "صفحة فيسبوك", en: "Facebook page" }, { ar: "20 يوم محتوى", en: "20 days of content" }, { ar: "بداية من الصفر", en: "From scratch" }],
    steps: [
      { t: { ar: "التحدي", en: "The Challenge" }, i: "📍", p: { ar: "براند Cosmetics جديد، معروف بس وسط دايرة أصحاب صاحبة البراند، والصفحة بتبدأ من الصفر ومحدش يعرفها.", en: "A new cosmetics brand, known only within the founder's circle of friends, with a page starting completely from scratch that nobody knew about." } },
      { t: { ar: "الاستراتيجية", en: "The Strategy" }, i: "🧭", p: { ar: "نبني الثقة قبل البيع: توعية قوية بروزي، محتوى تعليمي بيجاوب على مشاكل البشرة والشعر، تركيز على نقاط ألم الجمهور، وباكيدجات تحل كل مشكلة، بـ TOV قريب.", en: "Build trust before selling: strong brand awareness, educational content answering skin and hair concerns, a focus on the audience's pain points, and bundles that solve each problem — in a relatable tone of voice." } },
      { t: { ar: "التنفيذ", en: "The Execution" }, i: "✍️", p: { ar: "20 يوم محتوى بخطة واضحة:", en: "20 days of content with a clear plan:" },
        mix: [["توعية بالبراند", "Brand awareness", 75], ["محتوى بيعي", "Sales content", 10], ["Social Proof", "Social Proof", 10], ["محتوى ملهم", "Inspirational", 5]] },
      { t: { ar: "النتيجة", en: "The Result" }, i: "🍃", res: true, p: { ar: "الصفحة اتعرفت من أول يوم: 33.2 ألف مشاهدة، و1.1 ألف تفاعل، و219 متابع جديد.", en: "The page made itself known from day one: 33.2K views, 1.1K interactions, and 219 new followers." } }
    ],
    band: [
      { b: "33.2K", s: { ar: "مشاهدة", en: "views" }, hl: true },
      { b: "1.1K", s: { ar: "تفاعل", en: "interactions" } },
      { b: "1.5K", s: { ar: "زيارة للصفحة", en: "page visits" } },
      { b: "219", s: { ar: "متابع جديد", en: "new followers" } }
    ],
    proof: [
      { img: "images/res_r.webp", b: { ar: "من إحصائيات الصفحة نفسها", en: "Straight from the page's own stats" }, d: { ar: "", en: "" }, s: { ar: "أرقام Meta Business Suite: مشاهدات ووصول وتفاعل وزيارات ومتابعين.", en: "Meta Business Suite numbers: views, reach, engagement, visits and followers." } }
    ]
  }
};

// ===== شركاء الرحلة (اللوجوهات) =====
var PARTNERS = [
  { name: "PaperMints", logo: "images/logo_papermints.webp", f: "papermints" },
  { name: "C&B", logo: "images/logo_cb.webp", f: "cb" },
  { name: { ar: "يُدنين", en: "Yadnin" }, logo: "images/logo_udnyn.webp", f: "udnyn" },
  { name: { ar: "روزي بيوتي", en: "Rossy Beauty" }, logo: "images/logo_rossy.webp", f: "rossy" },
  { name: { ar: "د. عبدالرحمن الصايغ", en: "Dr. Abdulrahman Al-Sayegh" }, logo: "images/dr_abdulrahman.webp", f: "dr_abdulrahman" },
  { name: "Permanent Care", logo: "images/logo_permanent_care.webp", f: "permanent_care" },
  { name: { ar: "أحمد سمير", en: "Ahmed Samir" }, logo: "images/logo_samir.webp", f: "samir" },
  { name: { ar: "ميلانايت الخليج", en: "MilaKnight Gulf" }, logo: "images/logo_milaknight_gulf.webp", f: "milaknight_gulf" },
  { name: "Sofa Studio", logo: "images/logo_sofa_studio.webp", f: "sofa_studio" },
  { name: "LiqStream", logo: "images/logo_lx.webp", f: "lx" },
  { name: "Qawamna", logo: "images/logo_qawamna.webp", f: "websites" },
  { name: { ar: "مجمع أسرة المجد الطبي", en: "Osrat Almajd Medical Complex" }, logo: "images/logo_majd.webp", f: "websites" },
  { name: "Mind Sync", logo: "images/logo_mind.webp" },
  { name: "Mazaya Aluminum", logo: "images/logo_mazaya.webp" },
  { name: "Abdullah Almunifi", logo: "images/logo_almunifi.webp" },
  { name: "TBA", logo: "images/logo_extra2.webp" },
  { name: "MilaKnight UK", logo: "images/logo_milaknight_uk.webp", f: "milaknight_uk" }
];

// ===== خدماتي =====
var SERVICES = [
  ["🧭", "استراتيجية المحتوى", "Content Strategy"],
  ["📅", "محتوى وخطة السوشيال ميديا", "Social Media Calendar"],
  ["🎬", "السكريبتات والمحتوى المرئي", "Scriptwriting"],
  ["🤳", "محتوى UGC", "UGC Content"],
  ["📣", "الحملات والنصوص الإعلانية", "Ad Campaigns"],
  ["🏠", "محتوى المواقع", "Website Content"],
  ["🚀", "صفحات الهبوط", "Landing Pages"],
  ["🛍️", "وصف المنتجات", "Product Description"],
  ["✉️", "التسويق بالإيميل", "Email Marketing"],
  ["💡", "المحتوى الإبداعي", "Creative Content"]
];

// ===== ليه تختارني =====
var WHY = [
  ["brain", "بدرس سيكولوجية عميلك", "I study your customer's psychology", "Audience Psychology", "بفهم اللي بيحرّك عميلك ويخلّيه يشتري، وبكتب على أساسه.", "I understand what drives your customer to buy, and write based on it."],
  ["trend", "كوبي بيبيع", "Copy that sells", "Conversion Copywriting", "كل كلمة ليها هدف: تشد الانتباه، تقنع، وتحرّك العميل لخطوة.", "Every word has a purpose: grab attention, persuade, and move the customer to act."],
  ["book", "بحكي قصة البراند", "I tell your brand's story", "Storytelling", "بحوّل منتجك لحكاية الناس تحس بيها وتفتكرها.", "I turn your product into a story people feel and remember."],
  ["mic", "صوت البراند بلهجة جمهوره", "Brand voice, in your audience's dialect", "Brand Voice", "بكتب بصوت البراند ولغة جمهوره، مصري أو خليجي.", "I write in your brand's voice and your audience's own language, Egyptian or Gulf."],
  ["route", "عقلية ماركتنج، مش كتابة بس", "A marketing mindset, not just writing", "Marketing Mindset", "بربط كل بوست برحلة العميل، من أول ما يعرفك لحد ما يشتري.", "I connect every post to the customer journey, from discovering you to buying."],
  ["leaf", "نتايج حقيقية بالأرقام", "Real, measurable results", "Proven Results", "كل نتيجة في شغلي موثّقة من إحصائيات الصفحات نفسها.", "Every result in my work is backed by the pages' own stats."],
  ["search", "سيرش عميق قبل الكتابة", "Deep research before writing", "Deep Research", "بدرس البراند والمنافسين والسوق قبل أول كلمة.", "I study the brand, competitors, and market before the first word."],
  ["chart", "بقيس وبطوّر", "I measure and improve", "Data-Informed", "بتابع الأرقام والتفاعل، وبطوّر الخطة على أساسها.", "I track numbers and engagement, and refine the plan based on them."],
  ["clock", "ملتزمة ومرنة", "Reliable and flexible", "Reliable & Flexible", "مواعيدي مظبوطة، ومرنة في التعامل.", "My deadlines are solid, and I'm flexible to work with."]
];

// ===== محطات الإبداع (طريقة شغلي) =====
var STATIONS = [
  ["Brand Understanding", "فهم البراند وكواليسه", "Understanding the brand", "بفهم المنتج وقيمته، والقصة اللي ورا مشروعك.", "I understand the product, its value, and the story behind your business.", 95],
  ["Audience Research", "دراسة الجمهور", "Audience research", "بحلل جمهورك: نقاط ألمه، بيدوّر على إيه، وبيتكلم إزاي.", "I analyze your audience: their pain points, what they look for, and how they talk.", 92],
  ["Strategy & Planning", "الاستراتيجية والخطة", "Strategy & planning", "بحدد الرسايل وتوزيع المحتوى: توعية، بيعي، Social Proof، وملهم.", "I define the messaging and content mix: awareness, sales, social proof, and inspiration.", 90],
  ["Relatable Writing", "الكتابة بـ TOV قريب", "Writing in a relatable tone", "بكتب بلغة جمهورك، بهوك يشد وكلام يقنع.", "I write in your audience's own language, with a hook that grabs and words that convince.", 97],
  ["Measure & Improve", "القياس والتحسين", "Measuring & improving", "براجع التفاعل والنتايج وبطوّر الخطة عشان النمو يستمر.", "I review engagement and results, and refine the plan so growth keeps going.", 88]
];

// ===== انطباعات العملاء =====
var TESTIMONIALS = [
  ["t11", "منشور: من بين 1000 مشاركة كنت من ضمن أفضل 3 في كونتنت آرينا"], ["t7", "رأي معاذ يوسف في المحتوى"], ["t9", "رسالة من أحمد سمير بعد مراجعة محتوى الأسبوع الأول"],
  ["t4", "رسالة من عميل عن شغل منار"], ["t5", "رسالة عن الالتزام والإبداع"], ["n2", "رسالة عميل: الموقع رائع في المحتوى والنصوص"],
  ["n5", "رسالة عن ميتنج العميل وتسليم الكالندر"], ["n1", "رسالة: نفّذوا الاسكريبت بتاعك بالظبط"], ["t1", "رأي Marwa Nasr"],
  ["t3", "كومنت Muhammad Youssif"], ["n7", "رسالة: تحفة تحفة تحفة، ولا غلطة بجد"], ["t13", "كومنت من Yassmine Magdy"],
  ["n4", "رسالة: أشطر منار والله"], ["n6", "رسالة: معجب أوي بالشغل"], ["t2", "رسالة شكر من عميلة"],
  ["t8", "رسالة شكر من عميلة"], ["t6", "رسالة شكر وتقدير"], ["n3", "رسالة: سامي طاير بكامبين المنيفي"]
];

// ===== ثمار المغامرة (نتائج موثّقة) =====
// screen: img = صورة حقيقية | dash = شاشة مبنية من أرقام الحالة
var HARVEST = [
  { tag: ["📊", "رصد الأثر", "Impact tracking"], f: "papermints", ind: "beauty",
    h: { ar: "PaperMints <em>6.4M+</em> مشاهدة", en: "PaperMints <em>6.4M+</em> views" },
    p: { ar: "<b>حسابين</b> انطلقوا من الصفر في السعودية والإمارات، و<b>6.4 مليون</b> مشاهدة في <b>6 شهور</b>.", en: "<b>Two accounts</b> launched from scratch in KSA and the UAE, reaching <b>6.4M</b> views in <b>6 months</b>." },
    dash: "views" },
  { tag: ["🎬", "أداء ثابت", "Consistent performance"], f: "papermints", ind: "beauty",
    h: { ar: "<em>35 / 43</em> فيديو فوق 200K", en: "<em>35 / 43</em> videos above 200K" },
    p: { ar: "<b>81%</b> من الفيديوهات المنشورة تخطت <b>200 ألف</b> مشاهدة.. مش فيديو واحد ضرب والباقي واقف.", en: "<b>81%</b> of published videos crossed <b>200K</b> views — not one lucky hit." },
    dash: "ring" },
  { tag: ["⚽", "حملة تشويقية", "Teaser campaign"], f: "cb", ind: "coffee",
    h: { ar: "Beans Match <em>274K+</em>", en: "Beans Match <em>274K+</em>" },
    p: { ar: "<b>8 Reels</b> على شكل بطولة بين محاصيل القهوة، وأعلى فيديو وصل <b>66.9K</b> مشاهدة.", en: "<b>8 Reels</b> styled as a coffee-bean tournament; the top video hit <b>66.9K</b> views." },
    dash: "bars" },
  { tag: ["🔥", "من السكون للحركة", "From silence to buzz"], f: "udnyn", ind: "fashion",
    h: { ar: "تفاعلات يُدنين <em>+838%</em>", en: "Yadnin engagement <em>+838%</em>" },
    p: { ar: "من <b>171</b> لـ <b>4,138</b> تفاعل، والمبيعات زادت <b>150%</b> في 28 يوم.", en: "From <b>171</b> to <b>4,138</b> interactions, and sales up <b>150%</b> in 28 days." },
    img: "images/res_after.webp" },
  { tag: ["🌱", "من الصفر", "From zero"], f: "rossy", ind: "beauty",
    h: { ar: "روزي بيوتي <em>0 → 219</em>", en: "Rossy Beauty <em>0 → 219</em>" },
    p: { ar: "<b>33.2K</b> مشاهدة و<b>219</b> متابع جديد في <b>20 يوم</b> لصفحة محدش كان يعرفها.", en: "<b>33.2K</b> views and <b>219</b> new followers in <b>20 days</b> for a page nobody knew." },
    img: "images/res_r.webp" },
  { tag: ["🏆", "تحدي كتابة", "Writing challenge"], f: "arena", ind: "creative",
    h: { ar: "كونتنت آرينا <em>Top 3</em>", en: "Content Arena <em>Top 3</em>" },
    p: { ar: "من بين <b>1000</b> مشاركة في تحدي رمضان 2026، وفوز مرة بأفضل مشاركة.", en: "Out of <b>1,000</b> entries in the Ramadan 2026 challenge, with one Best Entry win." },
    img: "images/t11.webp", contain: true }
];

// نبذة البراندات بالإنجليزي (العربي في FILTERS داخل works.js)
var ABOUT_EN = {
  papermints: "A family-owned Belgian brand of instant breath-freshening products (mouth spray, CoolCaps), available in 64 countries. I led the launch strategy for two new accounts in Saudi Arabia and the UAE.",
  cb: "A Saudi specialty-coffee brand under the slogan \"How Coffee Should Be\". I created its interactive World Cup–style Beans Match campaign.",
  udnyn: "A modest-fashion brand with a loyal offline base. I brought its Facebook group to life with fresh content and a Ramadan campaign.",
  rossy: "A new cosmetics brand starting its Facebook page from zero. Trust-first content and bundles that solve real skin and hair problems.",
  permanent_care: "An oral-care brand offering complete solutions that make daily care simple and elegant, for lasting freshness and confidence.",
  dr_abdulrahman: "A consultant in bariatric and laparoscopic surgery. I built his personal brand with medical content in a clear Saudi dialect that simplifies surgery and builds patient trust.",
  websites: "Full medical website copy — from page structure and design direction to the content and the blog.",
  milaknight_uk: "Content strategy and marketing messages for the UK market, written for the local culture and audience — never a literal translation.",
  milaknight_gulf: "Content strategy for regional markets, focused on the Gulf, Emirati, Syrian and Egyptian audiences.",
  samir: "Personal-branding carousels that explain AI and marketing tools in simple language.",
  sofa_studio: "A Saudi furniture factory where every sofa is made locally. Content that tells the story of Saudi craftsmanship from frame to final stitch.",
  lx: "A Saudi car-service center; awareness carousels that bring its maintenance services closer to customers.",
  arena: "The Ramadan 2026 writing challenge with 1,000+ content writers — I placed in the Top 3 across all entries and won Best Entry once. 🏆",
  misc: "Ad copy and creative ideas for a range of brands and products: online courses, Ramadan food, and food products.",
};
