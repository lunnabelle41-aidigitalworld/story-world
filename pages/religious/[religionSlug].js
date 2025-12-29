import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import storiesData from '../../models/stories';
import authorsData from '../../models/authors';

// This function gets called at build time to pre-render dynamic routes
export async function getStaticPaths() {
  // Define religion slugs
  const religionSlugs = ['islam', 'christianity', 'hinduism', 'buddhism', 'judaism', 'sikhism'];
  
  // Get the paths we want to pre-render based on religions
  const paths = religionSlugs.map((religionSlug) => ({
    params: { religionSlug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { 
    paths, 
    fallback: 'blocking' // Changed to 'blocking' to handle 404s better
  };
}

// This function gets called at build time to pre-render dynamic routes
export async function getStaticProps({ params }) {
  const { religionSlug } = params;
  
  // Religion information
  const religionInfo = {
    islam: { 
      name: 'Islamic Stories', 
      slug: 'islam',
      description: 'Inspiring tales from Islamic tradition, including stories of prophets, companions, and spiritual wisdom.',
      icon: '☪️',
      color: 'from-green-900 to-gray-900',
      accentColor: 'green'
    },
    christianity: { 
      name: 'Christian Stories',
      slug: 'christianity',
      description: 'Heartwarming narratives from Christian tradition, featuring parables, saints, and faith journeys.',
      icon: '✝️',
      color: 'from-blue-900 to-gray-900',
      accentColor: 'blue'
    },
    hinduism: { 
      name: 'Hindu Stories',
      slug: 'hinduism',
      description: 'Ancient wisdom and divine tales from Hindu mythology, including epics and spiritual teachings.',
      icon: '🕉️',
      color: 'from-orange-900 to-gray-900',
      accentColor: 'orange'
    },
    buddhism: { 
      name: 'Buddhist Stories',
      slug: 'buddhism',
      description: 'Enlightening stories of compassion, mindfulness, and the path to awakening.',
      icon: '☸️',
      color: 'from-yellow-900 to-gray-900',
      accentColor: 'yellow'
    },
    judaism: { 
      name: 'Jewish Stories', 
      slug: 'judaism',
      description: 'Rich traditions and timeless tales from Jewish heritage and sacred texts.',
      icon: '✡️',
      color: 'from-indigo-900 to-gray-900',
      accentColor: 'indigo'
    },
    sikhism: { 
      name: 'Sikh Stories',
      slug: 'sikhism',
      description: 'Stories of courage, devotion, and spiritual enlightenment from Sikh tradition.',
      icon: '☬',
      color: 'from-amber-900 to-gray-900',
      accentColor: 'amber'
    }
  };

  // Check if the religion slug is valid
  if (!religionInfo[religionSlug]) {
    return {
      notFound: true // This will trigger the 404 page
    };
  }

  // Get the current religion's info
  const currentReligion = religionInfo[religionSlug];

  // Mock religious stories data (in a real implementation, this would come from a database)
  const religiousStoriesData = {
    islam: [
      // English stories
      {
        id: 1001,
        title: "The Light of Guidance",
        author: "Fatima Ahmed",
        authorId: 1,
        excerpt: "A young seeker's journey to find spiritual enlightenment through the teachings of the Quran and the example of the Prophet Muhammad (peace be upon him).",
        genre: "Spiritual Journey",
        mood: "Inspirational",
        length: "Short Story",
        resonance: 96,
        publishDate: "2025-11-15",
        readTime: "18 min",
        language: "english",
        content: `
          <p>In the bustling city of Medina, a young woman named Aisha struggled with questions about her purpose in life. Despite having a successful career and loving family, she felt an emptiness that material possessions couldn't fill.</p>
          
          <p>One evening, while walking through the old quarter, she noticed a small mosque with warm light streaming from its windows. Drawn by an inexplicable force, she entered and found herself listening to a lecture about the Prophet Muhammad's (peace be upon him) teachings on compassion and service to others.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">Teaching of the Day</h3>
            <p class="italic text-gray-300">"None of you believes until he wishes for his brother what he wishes for himself." - Hadith of the Prophet Muhammad (peace be upon him)</p>
          </div>
          
          <p>This teaching resonated deeply with Aisha. She began volunteering at a local shelter, helping those less fortunate than herself. Through acts of kindness and service, she discovered the light of guidance that had been seeking her all along.</p>
        `
      },
      {
        id: 1002,
        title: "The Garden of Patience",
        author: "Yusuf Khan",
        authorId: 2,
        excerpt: "A tale of patience and trust in divine wisdom, inspired by the story of Prophet Yusuf (Joseph) and his trials.",
        genre: "Prophetic Stories",
        mood: "Reflective",
        length: "Novella",
        resonance: 94,
        publishDate: "2025-10-22",
        readTime: "32 min",
        language: "english",
        content: `
          <p>In the land of Egypt, a vizier named Zayd reflected on his journey from slavery to power, remembering the lessons of patience taught by the story of Prophet Yusuf (peace be upon him).</p>
          
          <p>Like Yusuf, Zayd had faced betrayal, imprisonment, and misunderstanding. Yet through each trial, he maintained his faith and integrity, trusting in Allah's plan even when the path seemed unclear.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">Wisdom of Patience</h3>
            <p class="text-gray-300">"And indeed, with hardship comes ease." - Quran 94:5</p>
          </div>
          
          <p>Years later, as he advised the Pharaoh on matters of state, Zayd understood that every challenge had been a stepping stone to greater wisdom and responsibility. The garden of patience had bloomed into a life of service and leadership.</p>
        `
      },
      {
        id: 1003,
        title: "Mercy in the Desert",
        author: "Amira Hassan",
        authorId: 3,
        excerpt: "A caravan leader learns the true meaning of mercy through an encounter with a lost traveler in the vast desert.",
        genre: "Parable",
        mood: "Heartwarming",
        length: "Short Story",
        resonance: 97,
        publishDate: "2025-09-30",
        readTime: "15 min",
        language: "english",
        content: `
          <p>Khalid ibn Rashid led one of the most successful trading caravans across the Arabian Peninsula. Known for his shrewd business sense and strict adherence to schedules, he had little patience for delays or complications.</p>
          
          <p>One scorching afternoon, as his caravan approached the treacherous Rub' al Khali desert, his scouts reported a lone figure collapsed near an oasis. The rational choice was to continue on schedule, as helping a stranger would delay the caravan and risk their own water supplies.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">Divine Mercy</h3>
            <p class="text-gray-300">"And We have not sent you, [O Muhammad], except as a mercy to the worlds." - Quran 21:107</p>
          </div>
          
          <p>Yet something in Khalid's heart moved him to investigate. He found a Bedouin tribesman who had lost his way and was near death from thirst. Despite protests from his crew, Khalid ordered the man given water and a place on their camels.</p>
          
          <p>Weeks later, this same traveler, revealed to be a prince of a neighboring tribe, negotiated a trade agreement that doubled Khalid's profits for the next decade. More importantly, Khalid learned that true wealth comes from showing mercy to others.</p>
        `
      },
      // 5 Urdu stories
      {
        id: 1004,
        title: "نور کی تلاش",
        author: "فاطمہ احمد",
        authorId: 1,
        excerpt: "ایک جوان خاتون کی روحانی روشنی کی تلاش، قرآن اور حضور صلی اللہ علیہ وسلم کی زندگی سے استعارہ۔",
        genre: "روحانی سفر",
        mood: "تاثیر انگیز",
        length: "قصہ",
        resonance: 95,
        publishDate: "2025-08-25",
        readTime: "20 min",
        language: "urdu",
        content: `
          <p>مدینہ منورہ کے شہر میں، فاطمہ نام کی ایک جوان خاتون زندگی کے مقصد کے بارے میں سوالات کے ساتھ جدوجہد کر رہی تھی۔ باوجود کامیاب کیریئر اور محبت بھری خاندان کے، اسے احساس ہوتا تھا کہ مادی اشیاء اس کی خالی جگہ کو نہیں بھر سکتیں۔</p>
          
          <p>ایک شام کو، پرانے محلے سے گزرتے ہوئے، اس نے ایک چھوٹے مسجد کو دیکھا جس سے گرم روشنی نکل رہی تھی۔ ایک ناقابل تصور زور کے ساتھ، وہ داخل ہوئی اور خود کو حضور صلی اللہ علیہ وسلم کی دعوت اور دوسروں کی مدد کے بارے میں لیکچر سننے میں پایا۔</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">آج کی تعلیم</h3>
            <p class="italic text-gray-300">"تم میں سے کوئی مؤمن نہیں ہے جب تک کہ وہ اپنے بھائی کے لئے وہی چاہے جو وہ خود کے لئے چاہتا ہے۔" - حضرت صلی اللہ علیہ وسلم کا حدیث</p>
          </div>
          
          <p>یہ تعلیم فاطمہ کے دل میں گہری نشان دہانی کر گئی۔ اس نے مقامی شیلٹر میں رضاکارانہ خدمات شروع کر دیں، دوسروں کی مدد کرتے ہوئے۔ بخشش اور خدمات کے عملوں کے ذریعے، اسے ہدایت کا نور ملا جو اس کی تلاش کا حصہ تھا۔</p>
        `
      },
      {
        id: 1005,
        title: "صبر کا باغ",
        author: "یوسف خان",
        authorId: 2,
        excerpt: "نبی یوسف علیہ السلام کی کہانی سے متاثر، صبر اور الہی حکمت پر اعتماد کی کہانی۔",
        genre: "نبواتی کہانیاں",
        mood: "غور کرنے والا",
        length: "نووالہ",
        resonance: 93,
        publishDate: "2025-07-30",
        readTime: "35 min",
        language: "urdu",
        content: `
          <p>مصر کی زمین میں، زید نام کا ایک وزیر اپنے غلامی سے طاقتور بننے کے سفر کو یاد کر رہا تھا، جس میں نبی یوسف علیہ السلام کی صبر کی تعلیمات کا اثر تھا۔</p>
          
          <p>یوسف کی طرح، زید کو بیچارگی، قید، اور غلط فہمیوں کا سامنا کرنا پڑا تھا۔ لیکن ہر آزمائش میں، اس نے اپنی ایمان اور ضبط نفس برقرار رکھا، اور اللہ تعالی کے منصوبے پر اعتماد کیا۔</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">صبر کی حکمت</h3>
            <p class="text-gray-300">"اور بے شک ہم نے تمہارے لئے مشقت کے ساتھ آسانی مقرر کی ہے۔" - قرآن ۹۴:۵</p>
          </div>
          
          <p>سالوں بعد، جب وہ فرعون کو ملکی معاملات پر مشورہ دے رہا تھا، تو زید کو احساس ہوا کہ ہر چیلنج ایک بڑی حکمت اور ذمہ داری کی طرف لے جانے والی سیڑھی تھا۔ صبر کا باغ ایک خدمت اور قیادت کی زندگی میں خلا ہو گیا تھا۔</p>
        `
      },
      {
        id: 1006,
        title: "صحرا میں رحمت",
        author: "عامرہ حسن",
        authorId: 3,
        excerpt: "ایک قافلہ راہنما کو صحرا میں کسی گمشدہ مسافر کے ساتھ ملنے والی رحمت کا حقیقی مطلب سمجھ آیا۔",
        genre: "مثال",
        mood: "دل کش",
        length: "قصہ",
        resonance: 94,
        publishDate: "2025-06-20",
        readTime: "16 min",
        language: "urdu",
        content: `
          <p>خلید بن راشد عرب کے شبه جزیرے کے سب سے کامیاب تاجروں میں سے ایک کا قافلہ چلاتا تھا۔ اس کی تیز خرد اور وقت کے لحاظ سے سخت ڈسیپلن کے لئے جانا جاتا تھا، اس کے پاس تاخیر یا پیچیدگیوں کے لئے وقت نہیں تھا۔</p>
          
          <p>ایک گرم شام، جب اس کا قافلہ ربل الخالی صحرا کی طرف جا رہا تھا، اس کے دریافت کاروں نے ایک تنہا شخص کو خورشید کے قریب گرے ہوئے بتایا۔ عقل کا فیصلہ یہ تھا کہ وقت کے لحاظ سے آگے بڑھنا چاہئے، کیونکہ کسی غیر معروف شخص کی مدد کرنے سے قافلہ کی تاخیر ہو سکتی تھی اور ان کی پانی کی فراہمی خطرے میں پڑ سکتی تھی۔</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">الٰہی رحمت</h3>
            <p class="text-gray-300">"اور ہم نے تمہارے لئے دنیا کے مخلوقات میں سے کوئی نبی نہیں بھیجا مگر اس کے لئے رحمت کے طور پر۔" - قرآن ۲۱:۱۰۷</p>
          </div>
          
          <p>لیکن خلید کے دل میں کچھ ایسا ہوا کہ وہ تحقیق کے لئے چلا گیا۔ اس نے ایک بیڈوئن قبیلے کا شخص دیکھا جو راستہ بھول چکا تھا اور پیاس کی وجہ سے موت کے قریب تھا۔ اپنی ٹیم کی م objections کے باوجود، خلید نے اس شخص کو پانی دینے اور اپنے اونٹوں پر جگہ دینے کا حکم دیا۔</p>
          
          <p>ہفتے بعد، یہی سفر کرنے والا، جو ایک پڑوسی قبیلے کا شہزادہ تھا، ایک ایسے تجارتی معاہدے پر اتفاق کیا جس نے اگلے دہائی کے لئے خلید کے منافع کو دوگنا کر دیا۔ زیادہ اہم بات یہ تھی کہ خلید کو احساس ہوا کہ حقیقی دولت دوسروں کے ساتھ رحمت کے اظہار میں ہے۔</p>
        `
      },
      {
        id: 1007,
        title: "اللہ کا بندہ",
        author: "احمد رضا",
        authorId: 12,
        excerpt: "ایک عام آدمی کی کہانی جو اللہ کی محبت میں اپنی زندگی بدل دیتا ہے۔",
        genre: "روحانی",
        mood: "تاثیر انگیز",
        length: "قصہ",
        resonance: 92,
        publishDate: "2025-05-15",
        readTime: "18 min",
        language: "urdu",
        content: `
          <p>کراچی کے ایک چھوٹے محلے میں رہنے والا محمد اسماعیل ایک عام کاریگر تھا۔ اس کی زندگی میں کوئی خاص بات نہیں تھی، لیکن ایک دن اس کے دل میں اللہ کی محبت کا احساس پیدا ہوا۔</p>
          
          <p>وہ ہر صبح نماز فجر کے بعد قرآن مجید پڑھنے لگا۔ قرآن کی آیات اسے ایک نئی دنیا کی طرف لے گئیں۔ اس نے اپنے علاقوں میں غریبوں کی مدد کرنا شروع کیا۔</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">الٰہی محبت</h3>
            <p class="text-gray-300">"اور میں نے تمہارے رب کی محبت کو کس طرح بھول سکتا ہوں جبکہ وہ نے مجھے سبق سکھایا؟" - سورۃ الشعراء</p>
          </div>
          
          <p>محمد اسماعیل کی زندگی میں ایک نیا رنگ آ گیا۔ وہ دوسروں کے لئے زندہ ہونے لگا۔ اس کی محبت اور بخشش نے اس کے علاقے کو ایک بہتر جگہ بنا دیا۔</p>
        `
      },
      {
        id: 1008,
        title: "قربانی کا راز",
        author: "زینب بیگم",
        authorId: 13,
        excerpt: "قربانی کے دن ایک خاتون کو ملنے والی بے پناہ روحانیت کی کہانی۔",
        genre: "ذاتی",
        mood: "معنوی",
        length: "قصہ",
        resonance: 91,
        publishDate: "2025-04-10",
        readTime: "17 min",
        language: "urdu",
        content: `
          <p>قربانی کے دن، ایک بوڑھی خاتون بیگم نے اپنی بیٹی کو قربانی کے بارے میں سکھایا۔ وہ کہنے لگیں کہ قربانی صرف جانوروں کو ذبح کرنا نہیں ہے، بلکہ اپنی خواہشات اور غرور کو قربان کرنا بھی ہے۔</p>
          
          <p>بیگم نے اپنی زندگی کی کہانی سنائی۔ وہ ایک وقت تھا جب وہ اپنے غرور اور جذبات کی قربانی نہیں کر سکتی تھیں۔ لیکن ایک دن، ایک دردناک تجربے کے بعد، انہوں نے سمجھا کہ حقیقی قربانی کیا ہے۔</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">حقیقی قربانی</h3>
            <p class="text-gray-300">"اور ہم نے ہر امت کے لئے قربانی کے جانور مقرر کئے ہیں تاکہ وہ اللہ کا نام لیتے ہوئے اس کے فضل سے فائدہ اٹھائیں۔" - قرآن ۲۲:۳۴</p>
          </div>
          
          <p>بیگم کی بیٹی نے سمجھا کہ قربانی ایک معنوی عمل ہے۔ یہ صرف جانوروں کو ذبح کرنا نہیں ہے، بلکہ اپنی خواہشات اور غرور کو اللہ کی رضا کے لئے قربان کرنا ہے۔</p>
        `
      },
      // 5 Arabic stories
      {
        id: 1009,
        title: "نور الهداية",
        author: "فاطمة أحمد",
        authorId: 1,
        excerpt: "رحلة امرأة شابة للعثور على التنوير الروحي من خلال تعليمات القرآن والسيرة النبوية لرسول الله محمد صلى الله عليه وسلم.",
        genre: "الرحلة الروحية",
        mood: "ملهم",
        length: "قصة قصيرة",
        resonance: 95,
        publishDate: "2025-03-22",
        readTime: "19 min",
        language: "arabic",
        content: `
          <p>في مدينة المدينة المنورة الصاخبة، كانت امرأة شابة تُدعى عائشة تصارع مع أسئلة حول هدفها في الحياة. وعلى الرغم من أنها تتمتع بمسيرة مهنية ناجحة وعائلة محبة، إلا أنها كانت تشعر بالفراغ الذي لا تستطيع الأشياء المادية ملؤه.</p>
          
          <p>في إحدى الأمسيات، أثناء المشي في الحي القديم، لاحظت مسجداً صغيراً يتدفق منه ضوء دافئ من النوافذ. وبفعل قوة لا يمكن تفسيرها، دخلت واستمعت إلى محاضرة عن تعاليم النبي محمد صلى الله عليه وسلم حول الرحمة والخدمة للآخرين.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">التعليم اليومي</h3>
            <p class="italic text-gray-300">"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه" - حديث النبي محمد صلى الله عليه وسلم</p>
          </div>
          
          <p>لقد أثر هذا التعليم بعمق في عائشة. بدأت التطوع في ملجأ محلي، مساعدة المحتاجين. ومن خلال أعمال المحبة والخدمة، اكتشفت نور الهداية الذي كان يبحث عنها طويلاً.</p>
        `
      },
      {
        id: 1010,
        title: "حديقة الصبر",
        author: "يوسف خان",
        authorId: 2,
        excerpt: "حكاية عن الصبر والثقة في الحكمة الإلهية، مستوحاة من قصة النبي يوسف عليه السلام ومحنته.",
        genre: "القصص النبوية",
        mood: "تأملي",
        length: "رواية قصيرة",
        resonance: 94,
        publishDate: "2025-02-28",
        readTime: "33 min",
        language: "arabic",
        content: `
          <p>في أرض مصر، كان الوزير زيد يتأمل في رحلته من العبيد إلى المناصب العليا، متذكرًا دروس الصبر التي علمتها قصة النبي يوسف عليه السلام.</p>
          
          <p>مثل يوسف، واجه زيد الخيانة والسجن وسوء الفهم. ومع ذلك، حافظ على إيمانه ونزاهته، ووثق بخطة الله حتى عندما بدا الطريق غامضًا.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">حكمة الصبر</h3>
            <p class="text-gray-300">"وإن مع العسر يسراً" - القرآن الكريم 94:5</p>
          </div>
          
          <p>بعد سنوات، وبينما كان يقدم المشورة للفرعون في شؤون الدولة، أدرك زيد أن كل تحدي كان حجرًا أساسًا للحكمة الأكبر والمسؤولية. لقد أزهرت حديقة الصبر في حياة من الخدمة والقيادة.</p>
        `
      },
      {
        id: 1011,
        title: "الرحمة في الصحراء",
        author: "أميرة حسن",
        authorId: 3,
        excerpt: "يتعلم قائد قافلة المعنى الحقيقي للرحمة من خلال اللقاء مع مسافر ضائع في الصحراء الشاسعة.",
        genre: "مثال",
        mood: "مؤثر",
        length: "قصة قصيرة",
        resonance: 93,
        publishDate: "2025-01-15",
        readTime: "16 min",
        language: "arabic",
        content: `
          <p>كان خالد بن راشد يقود إحدى القوافل التجارية الأكثر نجاحًا عبر شبه الجزيرة العربية. وكان معروفًا بذكائه التجاري والالتزام الصارم بالجداول الزمنية، وكان لديه صبر قليل للتأخير أو التعقيدات.</p>
          
          <p>في إحدى الظهائر الحارة، بينما كانت قافلته تتجه نحو صحراء الرُب-Al-Khali، أبلغته كشافة أنه تم رصد شخص وحيد مcollapse بالقرب من الواحة. كان الخيار العقلاني هو الاستمرار في الموعد المحدد، حيث إن مساعدة الغريب ستؤخر القافلة وتعرض مخزون المياه الخاص بهم للخطر.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">الرحمة الإلهية</h3>
            <p class="text-gray-300">"وما أرسلناك إلا رحمة للعالمين" - القرآن الكريم 21:107</p>
          </div>
          
          <p>لكن شيئًا ما في قلب خالد دفعه للتحقيق. وجد قبيلة بدوية قد ضل طريقها وكانت على وشك الموت من العطش. وعلى الرغم من احتجاجات طاقمه، أمر خالد بإعطاء الرجل الماء ومكانًا على جمالهم.</p>
          
          <p>بعد أسابيع، ظهر نفس المسافر، الذي تبين أنه أمير قبيلة مجاورة، ل يناقش اتفاقية تجارية ضاعفت أرباح خالد للعقد القادم. والأهم من ذلك، تعلم خالد أن الثروة الحقيقية تأتي من إظهار الرحمة للآخرين.</p>
        `
      },
      {
        id: 1012,
        title: "عبد الله",
        author: "أحمد رضا",
        authorId: 12,
        excerpt: "قصة رجل عادي يغير حياته من خلال محبة الله.",
        genre: "روحي",
        mood: "مُلهم",
        length: "قصة قصيرة",
        resonance: 92,
        publishDate: "2024-12-20",
        readTime: "17 min",
        language: "arabic",
        content: `
          <p>كان محمد إسماعيل، الذي يعيش في حي صغير في كراتشي، عاملًا عاديًا. لم يكن هناك شيء خاص في حياته، ولكن في يوم من الأيام، شعر بمحبة الله في قلبه.</p>
          
          <p>بدأ كل صباح بعد صلاة الفجر في قراءة القرآن الكريم. أخذته آيات القرآن إلى عالم جديد. بدأ في مساعدة الفقراء في منطقته.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">محبة الله</h3>
            <p class="text-gray-300">"وكيف أنسى ربي وقد هدان؟" - سورة الشعراء</p>
          </div>
          
          <p>تغيرت حياة محمد إسماعيل. أصبح حيًا للآخرين. جعلت محبته وعطاؤه منطقته مكانًا أفضل.</p>
        `
      },
      {
        id: 1013,
        title: "سر الذبيحة",
        author: "زينب بي",
        authorId: 13,
        excerpt: "قصة روحانية لا تُوصف تحدث لسيدة في يوم الأضحى.",
        genre: "شخصي",
        mood: "معنوي",
        length: "قصة قصيرة",
        resonance: 91,
        publishDate: "2024-11-25",
        readTime: "18 min",
        language: "arabic",
        content: `
          <p>في يوم الأضحى، علمت سيدة عجوز ابنتها عن الذبيحة. بدأت تقول إن الذبيحة ليست فقط ذبح الحيوانات، بل هي أيضًا التضحية بالرغبات والغرور.</p>
          
          <p>حكت السيدة قصة حياتها. كانت هناك فترة لم تستطع فيها التضحية بغرورها ومشاعرها. ولكن في يوم من الأيام، وبعد تجربة مؤلمة، فهمت ما هي الذبيحة الحقيقية.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-green-500/30">
            <h3 class="text-xl font-bold mb-4 text-green-300">الذبيحة الحقيقية</h3>
            <p class="text-gray-300">"ولكل أمة جعلنا منسكًا ليذكروا اسم الله" - القرآن الكريم 22:34</p>
          </div>
          
          <p>فهمت ابنة السيدة أن الذبيحة عمل معنوي. ليست فقط ذبح الحيوانات، بل التضحية بالرغبات والغرور من أجل رضا الله.</p>
        `
      }
    ],
    christianity: [
      {
        id: 2001,
        title: "The Good Samaritan's Gift",
        author: "Thomas Wright",
        authorId: 4,
        excerpt: "A modern retelling of the parable of the Good Samaritan, showing how compassion crosses all boundaries.",
        genre: "Parable",
        mood: "Heartwarming",
        length: "Short Story",
        resonance: 95,
        publishDate: "2025-08-20",
        readTime: "16 min",
        language: "english",
        content: `
          <p>In the busy streets of modern Jerusalem, a businessman named David hurried past a homeless man collapsed on the sidewalk. Like the priest and Levite in the ancient parable, he had important meetings and deadlines that couldn't be delayed.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Scripture Reference</h3>
            <p class="italic text-gray-300">"But a Samaritan, as he traveled, came where the man was; and when he saw him, he took pity on him." - Luke 10:33</p>
          </div>
          
          <p>But something made David pause. He thought of his own son who had recently been helped by a stranger during a difficult time. Taking off his jacket, he covered the man and called for medical help. This simple act of compassion would change both their lives forever.</p>
        `
      },
      {
        id: 2002,
        title: "Faith Beyond the Storm",
        author: "Mary Johnson",
        authorId: 5,
        excerpt: "A tale of faith and trust during life's most challenging moments, inspired by Jesus calming the storm.",
        genre: "Inspirational",
        mood: "Uplifting",
        length: "Short Story",
        resonance: 93,
        publishDate: "2025-07-15",
        readTime: "20 min",
        language: "english",
        content: `
          <p>Sarah clutched the steering wheel as the storm raged around her car. She was driving to the hospital to say goodbye to her father, who was in critical condition. The roads were flooded, and visibility was nearly zero.</p>
          
          <p>"Lord, I don't know if you're listening," she prayed, "but I need to get there. I need to make things right with Dad before it's too late."</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Words of Comfort</h3>
            <p class="text-gray-300">"He got up, rebuked the wind and said to the waves, 'Quiet! Be still!' Then the wind died down and it was completely calm." - Mark 4:39</p>
          </div>
          
          <p>Miraculously, as she spoke these words of scripture, the rain began to slow. She arrived at the hospital just in time to share a final, meaningful conversation with her father, reconciling years of estrangement.</p>
        `
      },
      {
        id: 2003,
        title: "The Widow's Offering",
        author: "Elizabeth Brown",
        authorId: 6,
        excerpt: "A story about sacrificial giving and how God sees the heart behind our gifts.",
        genre: "Inspirational",
        mood: "Reflective",
        length: "Short Story",
        resonance: 92,
        publishDate: "2025-06-10",
        readTime: "18 min",
        language: "english",
        content: `
          <p>Pastor Michael was preparing his sermon on the widow's mite when he noticed a small envelope in the offering plate with only a few coins. He was struggling financially himself and found himself judging the small amount.</p>
          
          <p>Later that week, an elderly woman named Ruth approached him after service. She explained that the offering was all she had, but she wanted to contribute to the new community center that would help feed hungry children.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Sacred Teaching</h3>
            <p class="text-gray-300">"Jesus sat down opposite the place where the offerings were put and watched the crowd putting their money into the temple treasury. Many rich people threw in large amounts. But a poor widow came and put in two very small copper coins, worth only a few cents. Calling his disciples to him, Jesus said, 'Truly I tell you, this poor widow has put more into the treasury than all the others.'" - Mark 12:41-43</p>
          </div>
          
          <p>Pastor Michael realized that Ruth's gift, though small in monetary value, represented a much greater sacrifice than the large donations from wealthy members. Her heart of generosity convicted him of his own judgmental attitude.</p>
        `
      },
      // 10 additional Christian stories
      {
        id: 2004,
        title: "The Prodigal Father's Love",
        author: "Pastor John Smith",
        authorId: 14,
        excerpt: "A touching story about forgiveness and unconditional love, inspired by the parable of the prodigal son.",
        genre: "Parable",
        mood: "Heartwarming",
        length: "Short Story",
        resonance: 96,
        publishDate: "2025-05-18",
        readTime: "17 min",
        language: "english",
        content: `
          <p>Robert had always been the responsible son, working in his father's business while his younger brother lived recklessly. When his brother finally returned after squandering his inheritance, Robert was resentful of the celebration his father planned.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Divine Forgiveness</h3>
            <p class="italic text-gray-300">"But the father said to his servants, 'Bring the best robe and put it on him, and put a ring on his hand and sandals on his feet. And bring the fattened calf and kill it, and let us eat and celebrate. For this my son was dead, and is alive again; he was lost, and is found.'" - Luke 15:22-24</p>
          </div>
          
          <p>Through a heartfelt conversation with his father, Robert learned that love isn't about fairness—it's about grace. His father's joy at his brother's return taught him that true love celebrates redemption over resentment.</p>
        `
      },
      {
        id: 2005,
        title: "Living Water",
        author: "Sarah Mitchell",
        authorId: 15,
        excerpt: "A story of spiritual thirst and fulfillment, inspired by Jesus meeting the Samaritan woman at the well.",
        genre: "Inspirational",
        mood: "Reflective",
        length: "Short Story",
        resonance: 94,
        publishDate: "2025-04-22",
        readTime: "19 min",
        language: "english",
        content: `
          <p>Emily had achieved everything the world said would make her happy—career success, financial security, and social recognition. Yet she felt an emptiness that no accomplishment could fill. Late one evening, she found herself sitting by a quiet lake, feeling spiritually thirsty.</p>
          
          <p>"Everyone's looking for something," she whispered to herself. "But what am I really looking for?"</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Living Water</h3>
            <p class="text-gray-300">"Jesus answered her, 'If you knew the gift of God and who it is that asks you for a drink, you would have asked him and he would have given you living water... Whoever drinks the water I give them will never thirst. Indeed, the water I give them will become in them a spring of water welling up to eternal life.'" - John 4:10,14</p>
          </div>
          
          <p>In that moment of vulnerability, Emily sensed a presence offering her something she'd never known—living water that would quench her deepest thirst forever. She realized that all her searching had been for this very encounter.</p>
        `
      },
      {
        id: 2006,
        title: "The Mustard Seed Faith",
        author: "Michael Rodriguez",
        authorId: 16,
        excerpt: "A tale of how small beginnings can lead to great things, inspired by Jesus' teaching about faith the size of a mustard seed.",
        genre: "Inspirational",
        mood: "Encouraging",
        length: "Short Story",
        resonance: 93,
        publishDate: "2025-03-30",
        readTime: "16 min",
        language: "english",
        content: `
          <p>David stared at the daunting task before him—organizing a community outreach program with almost no volunteers and a tiny budget. His friend had suggested he pray about it, but David wondered how prayer could accomplish what seemed impossible.</p>
          
          <p>"Even if I had faith the size of a mustard seed," he muttered, "would it really make a difference with such a huge challenge?"</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Small Beginnings</h3>
            <p class="text-gray-300">"Jesus replied: 'Because you have so little faith. Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, "Move from here to there," and it will move. Nothing will be impossible for you.'" - Matthew 17:20</p>
          </div>
          
          <p>Starting with just one volunteer and a hundred dollars, David began praying earnestly. Within months, dozens of volunteers joined, and donations poured in. What started as small as a mustard seed had grown into a thriving ministry that blessed hundreds of families.</p>
        `
      },
      {
        id: 2007,
        title: "The Light of the World",
        author: "Reverend Linda Chen",
        authorId: 17,
        excerpt: "A story about being a beacon of hope in dark times, inspired by Jesus as the light of the world.",
        genre: "Inspirational",
        mood: "Uplifting",
        length: "Short Story",
        resonance: 95,
        publishDate: "2025-02-14",
        readTime: "18 min",
        language: "english",
        content: `
          <p>After losing her job and facing mounting bills, Maria felt surrounded by darkness. Her neighborhood was struggling too, with increasing crime and poverty. One Sunday, her pastor spoke about being the light of the world in dark places.</p>
          
          <p>"You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, and it gives light to everyone in the house." - Matthew 5:14-15</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Being the Light</h3>
            <p class="text-gray-300">"I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life." - John 8:12</p>
          </div>
          
          <p>Maria decided to start a neighborhood watch program and organize a community food pantry. Though she started small, her light began to shine brighter as neighbors joined her efforts. Together, they transformed their community from despair to hope.</p>
        `
      },
      {
        id: 2008,
        title: "The Unmerciful Servant",
        author: "Pastor James Wilson",
        authorId: 18,
        excerpt: "A modern adaptation of the parable about forgiveness and the importance of showing mercy to others.",
        genre: "Parable",
        mood: "Thought-provoking",
        length: "Short Story",
        resonance: 92,
        publishDate: "2025-01-20",
        readTime: "20 min",
        language: "english",
        content: `
          <p>Corporate executive Daniel had just been forgiven a massive debt by his company after a financial scandal. Feeling relieved and grateful, he encountered his assistant who owed him a small expense reimbursement that she was struggling to pay.</p>
          
          <p>Instead of extending the same mercy he'd received, Daniel harshly demanded immediate repayment, even threatening her job. Other employees witnessed his lack of compassion despite the grace he'd just received.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Forgiveness and Mercy</h3>
            <p class="text-gray-300">"This is how my heavenly Father will treat each of you unless you forgive your brother or sister from your heart." - Matthew 18:35</p>
          </div>
          
          <p>When Daniel's manager heard about his treatment of his assistant, he reconsidered the mercy he'd shown. The executive learned a hard lesson: those who receive mercy must also show mercy, or they risk losing the grace they've been given.</p>
        `
      },
      {
        id: 2009,
        title: "The Pearl of Great Price",
        author: "Dr. Rachel Green",
        authorId: 19,
        excerpt: "A story about recognizing true value and making sacrifices for what matters most.",
        genre: "Inspirational",
        mood: "Reflective",
        length: "Short Story",
        resonance: 91,
        publishDate: "2024-12-15",
        readTime: "17 min",
        language: "english",
        content: `
          <p>Antique dealer Thomas had spent years collecting valuable items, always looking for the next big score. When he discovered a simple but exquisite pearl at a garage sale, something deep within him recognized its extraordinary worth, though he couldn't explain why.</p>
          
          <p>"Everything I have is for sale," he told his wife, "except this pearl. I don't know why, but I must keep it."</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Recognizing True Value</h3>
            <p class="text-gray-300">"Again, the kingdom of heaven is like a merchant looking for fine pearls. When he found one of great value, he went away and sold everything he had and bought it." - Matthew 13:45-46</p>
          </div>
          
          <p>Over time, Thomas realized that his attachment to the pearl had changed him. He began selling his other collections, downsizing his lifestyle, and investing in relationships rather than possessions. The pearl had taught him that some treasures are worth sacrificing everything else to obtain.</p>
        `
      },
      {
        id: 2010,
        title: "The Talents Redeemed",
        author: "Professor Mark Thompson",
        authorId: 20,
        excerpt: "A contemporary interpretation of the parable of the talents, emphasizing stewardship and growth.",
        genre: "Parable",
        mood: "Motivational",
        length: "Short Story",
        resonance: 93,
        publishDate: "2024-11-22",
        readTime: "19 min",
        language: "english",
        content: `
          <p>When CEO Catherine retired, she entrusted her substantial investment portfolio to three different fund managers with varying approaches. The conservative manager kept everything in safe bonds, the moderate manager diversified investments, and the aggressive manager sought high-growth opportunities.</p>
          
          <p>Two years later, when Catherine reviewed their performance, she praised the moderate and aggressive managers for their growth, but questioned the conservative manager about his lack of initiative.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Faithful Stewardship</h3>
            <p class="text-gray-300">"Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master's happiness!" - Matthew 25:21</p>
          </div>
          
          <p>Catherine realized that playing it safe with opportunities God provides is not honoring. Like the servant with the talents, we're called to invest what we've been given—whether money, skills, or time—wisely and productively for the benefit of others and God's kingdom.</p>
        `
      },
      {
        id: 2011,
        title: "The Sheep and the Goats",
        author: "Social Worker Anna Davis",
        authorId: 21,
        excerpt: "A story highlighting the importance of serving others, especially the marginalized.",
        genre: "Inspirational",
        mood: "Compassionate",
        length: "Short Story",
        resonance: 94,
        publishDate: "2024-10-30",
        readTime: "21 min",
        language: "english",
        content: `
          <p>Volunteer coordinator Lisa often wondered if her small acts of service really mattered. She served meals at the homeless shelter, visited nursing homes, and helped at clothing drives, but sometimes felt her efforts were insignificant compared to major charitable organizations.</p>
          
          <p>"I'm just one person," she would think. "What real difference can I make?"</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Service to Others</h3>
            <p class="text-gray-300">"Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me." - Matthew 25:40</p>
          </div>
          
          <p>Years later, reflecting on the faces of those she'd helped—a veteran who found housing, a lonely elder who received companionship, a family who got winter coats—Lisa realized that every act of service, no matter how small, had eternal significance in God's eyes.</p>
        `
      },
      {
        id: 2012,
        title: "The Wise and Foolish Builders",
        author: "Architect David Lee",
        authorId: 22,
        excerpt: "A modern parable about the importance of building life on solid foundations.",
        genre: "Parable",
        mood: "Instructive",
        length: "Short Story",
        resonance: 90,
        publishDate: "2024-09-18",
        readTime: "18 min",
        language: "english",
        content: `
          <p>Construction partners Jake and Sam were offered adjacent lots to build luxury homes. Jake invested in thorough soil analysis and proper foundation work, while Sam, eager to cut costs and speed up construction, skipped these expensive preliminary steps.</p>
          
          <p>When a severe storm hit their area, causing flooding and ground instability, the differences became starkly apparent. Jake's house stood firm, while Sam's home suffered major structural damage.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">Building on Solid Foundations</h3>
            <p class="text-gray-300">"Therefore everyone who hears these words of mine and puts them into practice is like a wise man who built his house on the rock. The rain came down, the streams rose, and the winds blew and beat against that house; yet it did not fall, because it had its foundation on the rock." - Matthew 7:24-25</p>
          </div>
          
          <p>Sam learned that cutting corners on the foundation affected everything else. Similarly, building our lives on Christ's teachings—though it may seem costly initially—provides the stability to withstand life's inevitable storms.</p>
        `
      },
      {
        id: 2013,
        title: "The Laborers in the Vineyard",
        author: "Pastor Robert Garcia",
        authorId: 23,
        excerpt: "A story exploring themes of grace, fairness and God's generous heart.",
        genre: "Parable",
        mood: "Thought-provoking",
        length: "Short Story",
        resonance: 92,
        publishDate: "2024-08-25",
        readTime: "20 min",
        language: "english",
        content: `
          <p>At a community garden project, volunteer coordinator Maria hired workers throughout the day—at 6 AM, 9 AM, noon, 3 PM, and even 5 PM. At the end of the day, she paid everyone the same amount, regardless of how long they'd worked.</p>
          
          <p>The early workers grumbled, feeling it was unfair. "We worked all day in the hot sun, while they only worked one hour!"</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-blue-500/30">
            <h3 class="text-xl font-bold mb-4 text-blue-300">God's Generosity</h3>
            <p class="text-gray-300">"Are you envious because I am generous? So the last will be first, and the first will be last." - Matthew 20:15-16</p>
          </div>
          
          <p>Maria explained that she had promised a fair wage to all, and she had the right to be generous with her resources. The story helped the workers understand that God's kingdom operates on grace rather than strict merit, and His generosity toward others doesn't diminish what we receive.</p>
        `
      }
    ],
    hinduism: [
      {
        id: 3001,
        title: "The Wisdom of the Elephant",
        author: "Ravi Patel",
        authorId: 7,
        excerpt: "A tale from the Panchatantra about perception and understanding, featuring the blind men and the elephant.",
        genre: "Fable",
        mood: "Philosophical",
        length: "Short Story",
        resonance: 91,
        publishDate: "2025-05-22",
        readTime: "15 min",
        language: "english",
        content: `
          <p>Five blind men were asked to describe an elephant by touching only one part of it. The one who touched the trunk said it was like a snake, the one who touched the leg said it was like a tree, and so on.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">Ancient Wisdom</h3>
            <p class="text-gray-300">"The elephant is like a wall," said one. "No, it's like a rope," said another. Each was partly right and partly wrong, for none saw the whole truth."</p>
          </div>
          
          <p>An old sage smiled as he watched the argument. "Truth," he said, "is like the elephant. Each of you has touched a part of it, but to understand the whole, you must listen to each other and combine your perspectives."</p>
        `
      },
      {
        id: 3002,
        title: "The Devotion of Prahlada",
        author: "Priya Sharma",
        authorId: 8,
        excerpt: "The inspiring story of young Prahlada's unwavering devotion to Lord Vishnu despite persecution.",
        genre: "Devotional",
        mood: "Inspirational",
        length: "Novella",
        resonance: 94,
        publishDate: "2025-04-18",
        readTime: "28 min",
        language: "english",
        content: `
          <p>Young Prince Prahlada was devoted to Lord Vishnu from his earliest years, much to the anger of his father Hiranyakashipu, a demon king who demanded worship as a god.</p>
          
          <p>Despite threats, imprisonment, and numerous attempts on his life, Prahlada's faith never wavered. His devotion was so pure that even when his aunt Holika tried to burn him alive in her fireproof cloak, he emerged unscathed while she was consumed by flames.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">Divine Protection</h3>
            <p class="text-gray-300">"Whoever has unflinching devotion to Me, and whoever is engaged in pure worship of Me, he is very, very dear to Me." - Bhagavad Gita 12.14</p>
          </div>
          
          <p>In the end, Lord Vishnu appeared as Narasimha to protect his devotee, teaching that true devotion transcends all worldly powers and that divine protection is assured for those who surrender completely to the Lord.</p>
        `
      },
      // 10 Hindi stories
      {
        id: 3003,
        title: "गजेंद्र का मोक्ष",
        author: "अरविंद जोशी",
        authorId: 24,
        excerpt: "एक शक्तिशाली हाथी की कहानी जो भगवान विष्णु से मुक्ति प्राप्त करता है।",
        genre: "भक्तिपूर्ण",
        mood: "प्रेरक",
        length: "कहानी",
        resonance: 95,
        publishDate: "2025-03-15",
        readTime: "20 min",
        language: "hindi",
        content: `
          <p>एक समय था जब गजेंद्र नाम का एक शक्तिशाली हाथी एक द्वीप पर राज करता था। एक दिन, जब वह एक सुंदर वन में घूम रहा था, तो उसका एक पैर एक छोटे पेड़ में फंस गया। उसने अपनी सारी शक्ति से पेड़ को हिलाने की कोशिश की, लेकिन पेड़ टूटा नहीं।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">भगवान विष्णु की कृपा</h3>
            <p class="text-gray-300">"जो मेरे शरण में आता है, मैं उसकी रक्षा करता हूँ।" - श्रीमद्भागवतम्</p>
          </div>
          
          <p>आखिरकार, जब गजेंद्र ने भगवान विष्णु की शरण ली, तो भगवान ने माकरी रूप में उसकी रक्षा की। यह कहानी हमें सिखाती है कि भगवान की शक्ति का कोई मूल्य नहीं होता और उनकी कृपा से कोई भी मुक्ति प्राप्त कर सकता है।</p>
        `
      },
      {
        id: 3004,
        title: "ध्रुव की ध्यान यात्रा",
        author: "सुनीता वर्मा",
        authorId: 25,
        excerpt: "छोटे ध्रुव की कहानी जो अपने मन को शांत करने के लिए ध्यान का मार्ग अपनाता है।",
        genre: "आध्यात्मिक",
        mood: "शांत",
        length: "कहानी",
        resonance: 92,
        publishDate: "2025-02-20",
        readTime: "18 min",
        language: "hindi",
        content: `
          <p>ध्रुव एक छोटा लड़का था जो अपने घर में शांति नहीं पा पा रहा था। उसके पिता ने उसे एक ऋषि के पास भेजा ताकि वह ध्यान का मार्ग सीख सके।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">ध्यान की शक्ति</h3>
            <p class="text-gray-300">"मन को नियंत्रित करना ही सच्ची शक्ति है।" - पतंजलि योगसूत्र</p>
          </div>
          
          <p>ऋषि ने ध्रुव को सिखाया कि कैसे ध्यान के माध्यम से मन को शांत किया जा सकता है। ध्रुव ने अभ्यास किया और अंततः आंतरिक शांति प्राप्त की। यह कहानी हमें सिखाती है कि ध्यान का मार्ग आंतरिक शांति की ओर जाता है।</p>
        `
      },
      {
        id: 3005,
        title: "राम का त्याग",
        author: "राजेश कुमार",
        authorId: 26,
        excerpt: "श्रीराम की कहानी जो अपने राज्य के लिए वनवास का त्याग करते हैं।",
        genre: "धार्मिक",
        mood: "उत्साहजनक",
        length: "कहानी",
        resonance: 96,
        publishDate: "2025-01-25",
        readTime: "22 min",
        language: "hindi",
        content: `
          <p>राजा दशरथ ने अपने पुत्र राम को राज्य का राजा बनाने की घोषणा की। लेकिन कैकेयी ने अपनी कामना का उपयोग करके राम को वनवास के लिए विवश कर दिया।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">त्याग का महत्व</h3>
            <p class="text-gray-300">"धर्म के लिए त्याग करना ही सच्चा धर्म है।" - रामायण</p>
          </div>
          
          <p>राम ने बिना किसी विरोध के वनवास का त्याग किया। उनका यह त्याग हमें सिखाता है कि सच्चा धर्म त्याग और समर्पण के बिना संभव नहीं है।</p>
        `
      },
      {
        id: 3006,
        title: "कर्मयोग की शिक्षा",
        author: "मीना देवी",
        authorId: 27,
        excerpt: "श्रीकृष्ण द्वारा अर्जुन को कर्मयोग के मार्ग की शिक्षा।",
        genre: "दार्शनिक",
        mood: "ज्ञानवर्धक",
        length: "कहानी",
        resonance: 93,
        publishDate: "2024-12-30",
        readTime: "25 min",
        language: "hindi",
        content: `
          <p>महाभारत के युद्ध के मैदान में, अर्जुन ने अपने भाइयों और गुरुओं के साथ युद्ध करने से इनकार कर दिया। उन्हें यह नैतिक संघर्ष बहुत कठिन लग रहा था।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">कर्मयोग का सिद्धांत</h3>
            <p class="text-gray-300">"कर्म करो पर फल की चिंता मत करो।" - श्रीमद्भगवद्गीता</p>
          </div>
          
          <p>श्रीकृष्ण ने अर्जुन को कर्मयोग के मार्ग की शिक्षा दी। उन्होंने सिखाया कि कर्म करना ही मनुष्य का धर्म है, लेकिन फल की आसक्ति नहीं होनी चाहिए। यह कहानी हमें सिखाती है कि कर्मयोग का मार्ग जीवन के संघर्षों को सामना करने का सबसे अच्छा तरीका है।</p>
        `
      },
      {
        id: 3007,
        title: "हनुमान जी की शक्ति",
        author: "विजय सिंह",
        authorId: 28,
        excerpt: "हनुमान जी की कहानी जो अपनी शक्ति और भक्ति के लिए प्रसिद्ध हैं।",
        genre: "भक्तिपूर्ण",
        mood: "प्रेरक",
        length: "कहानी",
        resonance: 94,
        publishDate: "2024-11-15",
        readTime: "19 min",
        language: "hindi",
        content: `
          <p>हनुमान जी रामायण में सबसे शक्तिशाली और भक्तिपूर्ण पात्र हैं। उन्होंने लंका के रावण के पास जाकर सीता माता की खोज की और राम के लिए अमृत लाए।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">भक्ति की शक्ति</h3>
            <p class="text-gray-300">"भक्ति ही सच्ची शक्ति है।" - रामचरितमानस</p>
          </div>
          
          <p>हनुमान जी की कहानी हमें सिखाती है कि भक्ति और शक्ति का संयोजन कितना शक्तिशाली हो सकता है। उनकी भक्ति ने उन्हें ऐसी शक्ति दी कि वे पहाड़ को उठा सकते थे और समुद्र को पार कर सकते थे।</p>
        `
      },
      {
        id: 3008,
        title: "शिव की तपस्या",
        author: "शांता राव",
        authorId: 29,
        excerpt: "भगवान शिव की कहानी जो तपस्या के माध्यम से परम ज्ञान प्राप्त करते हैं।",
        genre: "धार्मिक",
        mood: "आध्यात्मिक",
        length: "कहानी",
        resonance: 91,
        publishDate: "2024-10-20",
        readTime: "21 min",
        language: "hindi",
        content: `
          <p>भगवान शिव ने कैलाश पर्वत पर तपस्या की और परम ज्ञान प्राप्त किया। उन्होंने अपने ध्यान में इतनी गहराई से डूब जाने के कारण अपनी पत्नी सती की मृत्यु का भी ज्ञान नहीं पाया।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">तपस्या का महत्व</h3>
            <p class="text-gray-300">"तपस्या ही ज्ञान की कुंजी है।" - शिवपुराण</p>
          </div>
          
          <p>यह कहानी हमें सिखाती है कि तपस्या और ध्यान के माध्यम से ही मनुष्य परम ज्ञान प्राप्त कर सकता है। भगवान शिव की तपस्या हमें यह सिखाती है कि आध्यात्मिक ज्ञान के लिए समर्पण और तपस्या की आवश्यकता होती है।</p>
        `
      },
      {
        id: 3009,
        title: "कृष्ण की बाल लीलाएँ",
        author: "गीता नायर",
        authorId: 30,
        excerpt: "छोटे कृष्ण की कहानी जो गोकुल में अपनी लीलाओं के लिए प्रसिद्ध हैं।",
        genre: "भक्तिपूर्ण",
        mood: "हास्य",
        length: "कहानी",
        resonance: 95,
        publishDate: "2024-09-25",
        readTime: "17 min",
        language: "hindi",
        content: `
          <p>छोटे कृष्ण गोकुल में अपनी चालाकी और लीलाओं के लिए प्रसिद्ध थे। वे मक्खन चुराते थे, गायों को चराते थे और गोपियों के साथ रास खेलते थे।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">बाल कृष्ण की लीलाएँ</h3>
            <p class="text-gray-300">"बच्चों की लीलाएँ ही सच्ची आनंद की झलक हैं।" - श्रीमद्भागवतम्</p>
          </div>
          
          <p>कृष्ण की बाल लीलाएँ हमें सिखाती हैं कि जीवन का आनंद सरलता और प्राकृतिकता में है। उनकी लीलाएँ हमें यह याद दिलाती हैं कि हमें जीवन की सादगी को समझना चाहिए।</p>
        `
      },
      {
        id: 3010,
        title: "मीराबाई की भक्ति",
        author: "लक्ष्मी जैन",
        authorId: 31,
        excerpt: "मीराबाई की कहानी जो भगवान कृष्ण के प्रति अपनी अटूट भक्ति के लिए प्रसिद्ध हैं।",
        genre: "भक्तिपूर्ण",
        mood: "प्रेरक",
        length: "कहानी",
        resonance: 93,
        publishDate: "2024-08-30",
        readTime: "20 min",
        language: "hindi",
        content: `
          <p>मीराबाई राजस्थान की एक राजकुमारी थीं जिन्होंने भगवान कृष्ण के प्रति अपनी भक्ति को पूरे जीवन में समर्पित किया। उन्होंने अपने पति और परिवार को छोड़कर कृष्ण की भक्ति में अपना सारा समय व्यतीत किया।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">भक्ति का मार्ग</h3>
            <p class="text-gray-300">"भक्ति ही सब कुछ है।" - मीराबाई के पद</p>
          </div>
          
          <p>मीराबाई की कहानी हमें सिखाती है कि सच्ची भक्ति में समर्पण और निष्ठा की आवश्यकता होती है। उनकी भक्ति ने उन्हें ऐसी शक्ति दी कि वे समाज के रूढ़ नियमों को तोड़ सकीं और अपने मार्ग पर चल सकीं।</p>
        `
      },
      {
        id: 3011,
        title: "वाल्मीकि की प्रेरणा",
        author: "अनिल शर्मा",
        authorId: 32,
        excerpt: "ऋषि वाल्मीकि की कहानी जो रामायण के रचयिता बने।",
        genre: "ऐतिहासिक",
        mood: "प्रेरक",
        length: "कहानी",
        resonance: 90,
        publishDate: "2024-07-15",
        readTime: "23 min",
        language: "hindi",
        content: `
          <p>ऋषि वाल्मीकि पहले एक डाकू थे, लेकिन एक दिन उन्हें एक शिवलिंग के दर्शन हुए और उन्होंने अपने जीवन को बदल दिया। उन्होंने तपस्या की और परम ज्ञान प्राप्त किया।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">रूपांतरण की शक्ति</h3>
            <p class="text-gray-300">"परिवर्तन ही जीवन का नियम है।" - वाल्मीकि रामायण</p>
          </div>
          
          <p>एक दिन, जब वाल्मीकि ने एक कोयल के मृत्यु को देखा, तो उनके ह्रदय में करुणा का भाव उठा और उन्होंने अपनी पहली श्लोक कविता लिखी। यहीं से रामायण की रचना शुरू हुई। यह कहानी हमें सिखाती है कि कोई भी व्यक्ति अपने जीवन को बदल सकता है।</p>
        `
      },
      {
        id: 3012,
        title: "चैतन्य महाप्रभु की कृपा",
        author: "सुधा राव",
        authorId: 33,
        excerpt: "चैतन्य महाप्रभु की कहानी जो भक्ति और प्रेम के संदेश फैलाए।",
        genre: "भक्तिपूर्ण",
        mood: "प्रेरक",
        length: "कहानी",
        resonance: 92,
        publishDate: "2024-06-20",
        readTime: "18 min",
        language: "hindi",
        content: `
          <p>चैतन्य महाप्रभु बंगाल के एक पंडित थे जिन्होंने भक्ति और प्रेम के संदेश को फैलाया। उन्होंने कृष्ण के प्रति अपनी भक्ति को गान, नृत्य और संकीर्तन के माध्यम से व्यक्त किया।</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-orange-500/30">
            <h3 class="text-xl font-bold mb-4 text-orange-300">भक्ति का संदेश</h3>
            <p class="text-gray-300">"हरे कृष्ण, हरे कृष्ण, कृष्ण कृष्ण, हरे हरे..." - चैतन्य महाप्रभु</p>
          </div>
          
          <p>चैतन्य महाप्रभु की कृपा ने लाखों लोगों को भक्ति के मार्ग पर लाया। उनकी शिक्षाएँ हमें सिखाती हैं कि भक्ति और प्रेम के माध्यम से ही मनुष्य परमात्मा के साथ एक हो सकता है।</p>
        `
      }
    ],
    buddhism: [
      {
        id: 4001,
        title: "The Miracle of Mindfulness",
        author: "Tenzin Gyatso",
        authorId: 9,
        excerpt: "A story illustrating the Buddha's teaching on mindfulness and living in the present moment.",
        genre: "Teaching",
        mood: "Peaceful",
        length: "Short Story",
        resonance: 93,
        publishDate: "2025-03-15",
        readTime: "14 min",
        language: "english",
        content: `
          <p>A distraught student approached the Buddha, overwhelmed by anxiety about the future and regret about the past. "Master," he cried, "how can I find peace when my mind is constantly racing?"</p>
          
          <p>The Buddha held up a flower and asked the student to observe it carefully. "Notice its color, its texture, its fragrance. Notice how it exists perfectly in this moment, without concern for yesterday or tomorrow."</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">Mindful Living</h3>
            <p class="text-gray-300">"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." - Buddha</p>
          </div>
          
          <p>As the student focused on the flower, his breathing slowed and his mind became calm. He realized that peace was not somewhere to be achieved, but was available in every present moment when the mind was not scattered by past regrets or future fears.</p>
        `
      },
      // 10 Buddhist stories
      {
        id: 4002,
        title: "พระพุทธเจ้าและกษัตริย์อันโธ",
        author: "สุนทร อภัยวงศ์",
        authorId: 34,
        excerpt: "เรื่องราวของพระพุทธเจ้าที่ไปเยี่ยมกษัตริย์อันโธผู้ทรงฆ่าล้านชีวิต",
        genre: "ประวัติศาสตร์",
        mood: "สอนธรรม",
        length: "เรื่องสั้น",
        resonance: 94,
        publishDate: "2025-01-10",
        readTime: "18 min",
        language: "thai",
        content: `
          <p>พระพุทธเจ้าเสด็จไปยังอาณาจักรของกษัตริย์อันโธซึ่งเป็นผู้ทรงฆ่าคนแล้วมากกว่าล้านชีวิต พระองค์ทรงสอนให้เขาเข้าใจถึงกรรมและผลแห่งการกระทำ</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสอนสำคัญ</h3>
            <p class="text-gray-300">"แม้จะเป็นผู้มีบาปมากเพียงใด หากกลับใจได้ก็สามารถไถ่บาปได้"</p>
          </div>
          
          <p>กษัตริย์อันโธได้ฟังธรรมจากพระพุทธเจ้าจนเกิดความสำนึกในกรรม และทรงเลิกการทำร้ายชีวิตสิ่งมีชีวิตทั้งหลาย กลายเป็นผู้ปกครองที่เมตตาและยุติธรรม</p>
        `
      },
      {
        id: 4003,
        title: "Đức Phật và chú bé chăn trâu",
        author: "Nguyễn Minh Đức",
        authorId: 35,
        excerpt: "Câu chuyện cảm động về một cậu bé chăn trâu nghèo khổ được Đức Phật độ thoát.",
        genre: "Truyền cảm hứng",
        mood: "Cảm động",
        length: "Truyện ngắn",
        resonance: 93,
        publishDate: "2024-12-20",
        readTime: "16 min",
        language: "vietnamese",
        content: `
          <p>Cậu bé tên là Thiện làm thuê cho một phú ông địa phương để kiếm sống qua ngày. Mỗi ngày cậu phải chăn bò từ sáng đến tối, không có thời gian học hành hay vui chơi.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">Lời dạy của Đức Phật</h3>
            <p class="text-gray-300">"Tâm từ bi là kho báu lớn nhất mà con người có thể có."</p>
          </div>
          
          <p>Một hôm, Đức Phật đi ngang qua thấy cảnh cậu bé đang khóc vì bị chủ mắng. Ngài dừng lại an ủi và giảng pháp cho cậu. Từ đó, Thiện trở thành đệ tử của Đức Phật và sau này đắc đạo.</p>
        `
      },
      {
        id: 4004,
        title: "พระโพธิสัตว์กวนซือ",
        author: "ลิน หยุนเฉิง",
        authorId: 36,
        excerpt: "ตำนานของพระโพธิสัตว์กวนซือผู้มีเมตตาและกรุณา",
        genre: "ตำนาน",
        mood: "ศักดิ์สิทธิ์",
        length: "เรื่องสั้น",
        resonance: 95,
        publishDate: "2024-11-15",
        readTime: "20 min",
        language: "thai",
        content: `
          <p>พระโพธิสัตว์กวนซือเป็นหนึ่งในโพธิสัตว์ที่มีเมตตาที่สุดในพุทธศาสนา เสด็จมาช่วย众生ในโลกทุกๆ ชาติ โดยไม่แสวงหาความเป็นพุทธเพื่อตนเอง</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสวดมนต์</h3>
            <p class="text-gray-300">"นะมะ พะทะ เมทะ นะโม สะระ วะ บุทธา ยะนะ สูตระ"</p>
          </div>
          
          <p>ท่านมีญาณเวียนว่ายตายเกิดเพื่อช่วย众生ให้พ้นทุกข์ โดยสัญญาว่าจะไม่เป็นพุทธก่อนที่众生ทั้งหมดจะได้解脱 จึงเป็นที่เคารพนับถือของผู้ศรัทธาทั่วไป</p>
        `
      },
      {
        id: 4005,
        title: "พระมหากัสสปะและถ้วยข้าว",
        author: "ชาญชัย ปัญญาภรณ์",
        authorId: 37,
        excerpt: "เรื่องราวของพระมหากัสสปะผู้ทรงความเมตตาต่อภคินี",
        genre: "ประวัติศาสตร์",
        mood: "สอนธรรม",
        length: "เรื่องสั้น",
        resonance: 92,
        publishDate: "2024-10-25",
        readTime: "15 min",
        language: "thai",
        content: `
          <p>พระมหากัสสปะเป็นหนึ่งในพระสาวกของพระพุทธเจ้าผู้ทรงความจำยอมาก วันหนึ่งขณะที่พระองค์บิณฑบาตอยู่ พบกับภคินีผู้แก่ชราผู้มีเพียงข้าวเหนียวหนึ่งถ้วย</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสอนสำคัญ</h3>
            <p class="text-gray-300">"การให้ทานแม้เพียงเล็กน้อยแต่ด้วยใจบริสุทธิ์ ย่อมมีผลใหญ่หลวง"</p>
          </div>
          
          <p>พระองค์ทรงรับข้าวเหนียวนั้นด้วยใจสำนึกในบุญของภคินี แม้จะมีเพียงเล็กน้อย แต่พระองค์ทรงเห็นคุณค่าของจิตศรัทธาที่แท้จริง นี่คือบทเรียนอันล้ำค่าเกี่ยวกับการให้และการรับ</p>
        `
      },
      {
        id: 4006,
        title: "禅宗公案：断臂求法",
        author: "李明慧",
        authorId: 38,
        excerpt: "关于神光断臂求法的禅宗公案",
        genre: "禅宗",
        mood: "深刻",
        length: "短篇",
        resonance: 91,
        publishDate: "2024-09-30",
        readTime: "17 min",
        language: "chinese",
        content: `
          <p>神光为了向达摩祖师求法，在雪中立候数日。达摩祖师见其诚心，问他有何所求。神光说：“弟子心未安，请和尚为我安心。”</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">禅语</h3>
            <p class="text-gray-300">"将心来，与汝安。"</p>
          </div>
          
          <p>达摩祖师说：“你把心拿来，我为你安心。”神光良久，云：“觅心了不可得。”达摩祖师云：“我与汝安心竟。”神光当下大悟。后人为表决心，自断左臂。</p>
        `
      },
      {
        id: 4007,
        title: "พระอรหันต์และดอกไม้",
        author: "ชาญชัย ปัญญาภรณ์",
        authorId: 39,
        excerpt: "เรื่องราวของพระอรหันต์ผู้มีจิตเมตตาและความอดทน",
        genre: "สอนธรรม",
        mood: "สงบ",
        length: "เรื่องสั้น",
        resonance: 90,
        publishDate: "2024-08-20",
        readTime: "14 min",
        language: "thai",
        content: `
          <p>พระอรหันต์ผู้หนึ่งจำพรรษาอยู่ในป่าลึก ทุกเช้าจะเดินทางไปบิณฑบาตยังหมู่บ้านใกล้เคียง ชาวบ้านบางคนไม่ชอบพระและพยายามทำร้ายพระด้วยการขว้างหินใส่</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสอน</h3>
            <p class="text-gray-300">"ผู้ไม่มี嗔恚ย่อมชนะผู้มี嗔恚เสมอ"</p>
          </div>
          
          <p>แต่พระอรหันต์ไม่เคยโกรธหรือตอบโต้ กลับยิ้มและให้อภัยเสมอ เมื่อเวลาผ่านไป คนที่เคยทำร้ายพระกลับเปลี่ยนใจและขอกราบเรียนรู้ธรรมะจากพระ</p>
        `
      },
      {
        id: 4008,
        title: "Đạo Phật và nàng Kiều",
        author: "Phạm Thị Lan Hương",
        authorId: 40,
        excerpt: "Câu chuyện về sự giác ngộ của nàng Kiều thông qua giáo lý nhà Phật",
        genre: "Văn học",
        mood: "Tĩnh lặng",
        length: "Truyện ngắn",
        resonance: 89,
        publishDate: "2024-07-15",
        readTime: "19 min",
        language: "vietnamese",
        content: `
          <p>Nàng Kiều sau bao năm lưu lạc đã tìm đến cửa chùa Một lần ngồi dưới gốc cây bồ đề, nàng đọc kinh Kim Cang và thấu hiểu được bản chất vô thường của cuộc đời</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">Kinh Kim Cang</h3>
            <p class="text-gray-300">"Tất cả pháp hữu vi đều là mộng 幻 泡 影"</p>
          </div>
          
          <p>Từ đó nàng buông bỏ mọi chấp trước về danh lợi, tình duyên và tìm thấy sự bình yên trong tâm hồn. Nàng trở thành cư sĩ và giúp đỡ những người khổ đau như chính mình từng trải qua</p>
        `
      },
      {
        id: 4009,
        title: "พระพุทธเจ้าและฆาติก",
        author: "ปรีชา ธรรมมงคล",
        authorId: 41,
        excerpt: "เหตุการณ์ที่พระพุทธเจ้าทรงเผชิญกับฆาติกผู้ถือขวาน",
        genre: "ประวัติศาสตร์",
        mood: "กล้าหาญ",
        length: "เรื่องสั้น",
        resonance: 93,
        publishDate: "2024-06-10",
        readTime: "16 min",
        language: "thai",
        content: `
          <p>ครั้งหนึ่งพระพุทธเจ้าเสด็จไปยังเมืองที่มีฆาติกชื่อว่าอัญญาโกณฑัญญะถือขวานรออยู่ เพื่อจะทำร้ายพระ แต่เมื่อได้พบพระพุทธเจ้าและฟังธรรมแล้วกลับเปลี่ยนใจ</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสอนสำคัญ</h3>
            <p class="text-gray-300">"ความรุนแรงไม่สามารถปราบความรุนแรงได้ มีเพียงเมตตาเท่านั้นที่สามารถทำได้"</p>
          </div>
          
          <p>พระพุทธเจ้าไม่ได้หลบหนีหรือแสดงความหวาดกลัว แต่ทรงแสดงความเมตตาและความเข้าใจ ฆาติกผู้นั้นได้สำนึกและ昄พุทธเป็นศิษย์ของพระพุทธเจ้าในภายหลัง</p>
        `
      },
      {
        id: 4010,
        title: "坐禅开悟",
        author: "王静怡",
        authorId: 42,
        excerpt: "一位年轻僧人通过坐禅获得觉悟的故事",
        genre: "禅宗",
        mood: "宁静",
        length: "短篇",
        resonance: 92,
        publishDate: "2024-05-05",
        readTime: "18 min",
        language: "chinese",
        content: `
          <p>小沙弥每日坐禅，但心中总是杂念纷飞，无法入定。师父告诉他："禅不在坐，而在心。" 小沙弥不解，继续苦修多年仍无进展</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">禅语</h3>
            <p class="text-gray-300">"无所住而生其心"</p>
          </div>
          
          <p>一日，小沙弥在扫地时忽然领悟：原来修行不在于刻意追求，而在于平常心。当他放下所有执着时，反而获得了真正的觉悟 这便是禅的真谛</p>
        `
      },
      {
        id: 4011,
        title: "พระพุทธเจ้าและสัตว์เลี้ยงลูก",
        author: "สมชาย ธรรมรักษ์",
        authorId: 43,
        excerpt: "พระพุทธเจ้าทรงสอนเกี่ยวกับความรักและความเมตตาของสัตว์เลี้ยงลูก",
        genre: "สอนธรรม",
        mood: "อบอุ่น",
        length: "เรื่องสั้น",
        resonance: 94,
        publishDate: "2024-04-01",
        readTime: "15 min",
        language: "thai",
        content: `
          <p>พระพุทธเจ้าเสด็จผ่านป่าและพบแม่นกนางแอ่นกำลังปกป้องลูกน้อยจากรูเขา แม่นกไม่กลัวอันตรายเพราะรักลูกมาก พระพุทธเจ้าทรงชมความเสียสละของแม่นก</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-yellow-500/30">
            <h3 class="text-xl font-bold mb-4 text-yellow-300">คำสอน</h3>
            <p class="text-gray-300">"ความรักแท้ไม่ใช่การครอบครอง แต่เป็นการเสียสละ"</p>
          </div>
          
          <p>พระองค์ทรงสอนว่าความรักที่แท้จริงคือเมตตา ซึ่งเป็นความรักที่ไม่มีเงื่อนไขและพร้อมเสียสละเพื่อประโยชน์ของผู้อื่น นี่คือต้นแบบของเมตตาในพระพุทธศาสนา</p>
        `
      }
    ],
    judaism: [
      {
        id: 5001,
        title: "The Light of Hanukkah",
        author: "David Cohen",
        authorId: 10,
        excerpt: "A heartwarming tale of faith and miracle during the Festival of Lights.",
        genre: "Historical",
        mood: "Hopeful",
        length: "Short Story",
        resonance: 92,
        publishDate: "2025-02-10",
        readTime: "17 min",
        language: "english",
        content: `
          <p>During the time of the Maccabees, when the Temple had been reclaimed from oppressors, there was only enough consecrated oil to light the menorah for one day. Yet miraculously, it burned for eight days.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Sacred Miracle</h3>
            <p class="text-gray-300">"Not by might nor by power, but by my Spirit,' says the Lord Almighty." - Zechariah 4:6</p>
          </div>
          
          <p>A young girl named Miriam witnessed this miracle and understood that sometimes the smallest amounts of faith, when pure, can accomplish the greatest wonders. Her family lit their menorah each night, remembering that divine light can sustain us through the darkest times.</p>
        `
      },
      // 10 Jewish stories
      {
        id: 5002,
        title: "The Binding of Isaac",
        author: "Sarah Rosenfeld",
        authorId: 44,
        excerpt: "A profound story of faith and obedience from the Torah, exploring the depths of Abraham's trust in God.",
        genre: "Biblical",
        mood: "Intense",
        length: "Short Story",
        resonance: 95,
        publishDate: "2025-01-05",
        readTime: "18 min",
        language: "english",
        content: `
          <p>God tested Abraham's faith by commanding him to sacrifice his beloved son Isaac. Without questioning, Abraham prepared for the journey to Mount Moriah, carrying the wood for the burnt offering and fire in his heart.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Test</h3>
            <p class="text-gray-300">"Now I know that you fear God, because you have not withheld from me your son, your only son." - Genesis 22:12</p>
          </div>
          
          <p>Just as Abraham raised the knife, an angel stopped him, revealing a ram caught in the thicket for the sacrifice instead. This story teaches that true faith sometimes requires the ultimate test, but God provides for those who trust Him completely.</p>
        `
      },
      {
        id: 5003,
        title: "The Wisdom of Solomon",
        author: "Michael Goldstein",
        authorId: 45,
        excerpt: "The famous tale of King Solomon's judgment that revealed true motherhood.",
        genre: "Historical",
        mood: "Wise",
        length: "Short Story",
        resonance: 91,
        publishDate: "2024-12-15",
        readTime: "15 min",
        language: "english",
        content: `
          <p>Two women came before King Solomon, both claiming to be the mother of a living child. One child had died in the night, and each insisted the living child was hers. The people waited to see how the wisest king would resolve this dilemma.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Wisdom</h3>
            <p class="text-gray-300">"Give the living child to the first woman, and don't kill him; she is his mother." - 1 Kings 3:27</p>
          </div>
          
          <p>Solomon proposed cutting the child in half, giving each woman a part. The true mother begged for the child's life to be spared, even if it meant giving him to the other woman. The impostor agreed to the division. Solomon knew instantly which was the real mother and awarded her the child.</p>
        `
      },
      {
        id: 5004,
        title: "Esther's Courage",
        author: "Rachel Abrams",
        authorId: 46,
        excerpt: "The heroic story of Queen Esther who saved her people from destruction.",
        genre: "Historical",
        mood: "Courageous",
        length: "Short Story",
        resonance: 93,
        publishDate: "2024-11-20",
        readTime: "16 min",
        language: "english",
        content: `
          <p>Queen Esther lived in the Persian court, concealing her Jewish identity. When her people faced annihilation by the evil Haman's decree, her cousin Mordecai urged her to intercede with King Ahasuerus, despite the risk to her own life.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Courage</h3>
            <p class="text-gray-300">"And who knows but that you have come to your royal position for such a time as this?" - Esther 4:14</p>
          </div>
          
          <p>Esther fasted and prayed for three days, then approached the king uninvited. "If I perish, I perish," she declared. Her courage led to Haman's downfall and salvation for the Jewish people, celebrated today in the festival of Purim.</p>
        `
      },
      {
        id: 5005,
        title: "Job's Trials",
        author: "Daniel Levine",
        authorId: 47,
        excerpt: "The story of Job's immense suffering and unwavering faith in God's justice.",
        genre: "Biblical",
        mood: "Reflective",
        length: "Novella",
        resonance: 89,
        publishDate: "2024-10-25",
        readTime: "28 min",
        language: "english",
        content: `
          <p>Job was a righteous man whom God blessed abundantly. Satan challenged that Job's faith was only due to his prosperity. With God's permission, he stripped Job of everything—his children, wealth, and health—leaving him sitting among ashes with painful sores.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Enduring Faith</h3>
            <p class="text-gray-300">"The Lord gave, and the Lord has taken away; blessed be the name of the Lord." - Job 1:21</p>
          </div>
          
          <p>Though his friends accused him of hidden sins, Job maintained his innocence while questioning God's justice. After his lengthy dialogue with God about the mysteries of creation, Job's fortunes were restored twofold, teaching that faith can survive even the darkest trials.</p>
        `
      },
      {
        id: 5006,
        title: "Ruth's Loyalty",
        author: "Leah Goldman",
        authorId: 48,
        excerpt: "A touching story of loyalty and devotion from the Book of Ruth.",
        genre: "Biblical",
        mood: "Heartwarming",
        length: "Short Story",
        resonance: 94,
        publishDate: "2024-09-30",
        readTime: "14 min",
        language: "english",
        content: `
          <p>Ruth, a Moabite woman, chose to stay with her Israelite mother-in-law Naomi after both their husbands died. Despite Naomi's urging to return to her own people, Ruth declared, "Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God."</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Unwavering Devotion</h3>
            <p class="text-gray-300">"May the Lord reward you for what you have done. May you be richly rewarded by the Lord, the God of Israel, under whose wings you have come to take refuge." - Ruth 2:12</p>
          </div>
          
          <p>Ruth's loyalty led her to glean in the fields of Boaz, a kinsman-redeemer who eventually married her. Their great-grandson would be King David, showing how loyalty and faithfulness are rewarded through generations.</p>
        `
      },
      {
        id: 5007,
        title: "Jonah and the Great Fish",
        author: "Aaron Schwartz",
        authorId: 49,
        excerpt: "The tale of Jonah's disobedience and his journey toward fulfilling God's mission.",
        genre: "Prophetic",
        mood: "Transformative",
        length: "Short Story",
        resonance: 90,
        publishDate: "2024-08-15",
        readTime: "13 min",
        language: "english",
        content: `
          <p>God commanded Jonah to go to Nineveh and preach against its wickedness, but Jonah fled in the opposite direction, boarding a ship to Tarshish. A great storm arose, and the sailors cast lots to discover who was responsible for their peril.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Mercy</h3>
            <p class="text-gray-300">"Then the Lord provided a great fish to swallow Jonah, and Jonah was inside the fish three days and three nights." - Jonah 1:17</p>
          </div>
          
          <p>After three days in the belly of the fish, Jonah prayed and was vomited onto dry land. He finally obeyed God's command and preached to Nineveh. When the people repented, Jonah was angry at God's mercy, learning that divine compassion extends even to enemies.</p>
        `
      },
      {
        id: 5008,
        title: "David and Goliath",
        author: "Benjamin Katz",
        authorId: 50,
        excerpt: "The inspiring story of young David's victory over the giant Philistine warrior.",
        genre: "Historical",
        mood: "Triumphant",
        length: "Short Story",
        resonance: 96,
        publishDate: "2024-07-20",
        readTime: "15 min",
        language: "english",
        content: `
          <p>The Israelites faced the Philistine army, terrified by their champion Goliath, a giant over nine feet tall who challenged any Israelite to single combat. For forty days no one dared accept, until young David arrived with supplies for his brothers.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Faith Over Fear</h3>
            <p class="text-gray-300">"You come against me with sword and spear and javelin, but I come against you in the name of the Lord Almighty." - 1 Samuel 17:45</p>
          </div>
          
          <p>Though King Saul offered his armor, David chose his shepherd's staff, sling, and five smooth stones. Trusting in God rather than human strength, David struck Goliath in the forehead, felling the giant with his own sword. This victory showed that with faith, the weak can overcome the mighty.</p>
        `
      },
      {
        id: 5009,
        title: "Joseph's Dreams",
        author: "Miriam Stein",
        authorId: 51,
        excerpt: "The story of Joseph's rise from prisoner to ruler of Egypt through interpreting dreams.",
        genre: "Biblical",
        mood: "Redemptive",
        length: "Novella",
        resonance: 92,
        publishDate: "2024-06-10",
        readTime: "30 min",
        language: "english",
        content: `
          <p>Joseph, favored by his father Jacob, dreamed that his brothers would bow to him, causing their jealousy. They sold him into slavery in Egypt, where he served Potiphar faithfully. False accusations landed him in prison, where he interpreted fellow prisoners' dreams accurately.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Providence</h3>
            <p class="text-gray-300">"You intended to harm me, but God intended it for good to accomplish what is now being done, the saving of many lives." - Genesis 50:20</p>
          </div>
          
          <p>When Pharaoh had troubling dreams, Joseph was summoned and interpreted them as seven years of plenty followed by seven years of famine. Made governor of Egypt, Joseph prepared grain stores. When famine struck, his brothers came seeking food, not recognizing him. Joseph forgave them, reuniting the family in Egypt.</p>
        `
      },
      {
        id: 5010,
        title: "The Golden Calf",
        author: "Samuel Rosenberg",
        authorId: 52,
        excerpt: "The story of the Israelites' idolatry while Moses received the Ten Commandments.",
        genre: "Biblical",
        mood: "Cautionary",
        length: "Short Story",
        resonance: 88,
        publishDate: "2024-05-05",
        readTime: "16 min",
        language: "english",
        content: `
          <p>While Moses remained on Mount Sinai receiving the Torah from God, the Israelites grew impatient. They gathered gold jewelry and fashioned a golden calf, declaring it the god who brought them out of Egypt. Aaron reluctantly participated in creating this idol.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Divine Justice</h3>
            <p class="text-gray-300">"You shall have no other gods before me. You shall not make for yourself an image..." - Exodus 20:3-4</p>
          </div>
          
          <p>Upon descending and witnessing this idolatry, Moses shattered the tablets containing the Ten Commandments. God threatened to destroy the people, but Moses interceded. The Levites executed judgment on the idolaters, and the nation repented. This story warns against turning away from God to false gods.</p>
        `
      },
      {
        id: 5011,
        title: "Daniel in the Lion's Den",
        author: "Judith Marcus",
        authorId: 53,
        excerpt: "The story of Daniel's faithfulness to God despite threat of death.",
        genre: "Prophetic",
        mood: "Courageous",
        length: "Short Story",
        resonance: 93,
        publishDate: "2024-04-01",
        readTime: "14 min",
        language: "english",
        content: `
          <p>Daniel, faithful to God, continued praying three times daily despite a decree forbidding prayer to any god or man for thirty days. His rivals used this devotion to trap him, knowing that King Darius would be forced to enforce the law he had signed.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-indigo-500/30">
            <h3 class="text-xl font-bold mb-4 text-indigo-300">Unshakeable Faith</h3>
            <p class="text-gray-300">"My God sent his angel, and he shut the mouths of the lions. They have not hurt me, because I was found innocent in his sight." - Daniel 6:22</p>
          </div>
          
          <p>Thrown into the lion's den, Daniel trusted in God's protection. The next morning, King Darius found him unharmed. The accusers were thrown to the lions instead, where they were devoured. The king issued a decree that all should reverence Daniel's God, showing that faithfulness brings divine protection.</p>
        `
      }
    ],
    sikhism: [
      {
        id: 6001,
        title: "The Saint-Warrior's Compassion",
        author: "Harpreet Singh",
        authorId: 11,
        excerpt: "A story of Guru Gobind Singh's teachings on combining strength with compassion.",
        genre: "Historical",
        mood: "Inspirational",
        length: "Short Story",
        resonance: 90,
        publishDate: "2025-01-05",
        readTime: "19 min",
        language: "english",
        content: `
          <p>Guru Gobind Singh stood before his Khalsa, warrior-saints who had taken vows to protect the innocent and fight injustice. But he reminded them that true strength was not just in the sword, but in the heart.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Divine Wisdom</h3>
            <p class="text-gray-300">"When all efforts fail, remember the Lord and fight. Never strike a blow in anger or hatred. Strike only to protect the righteous and uphold justice."</p>
          </div>
          
          <p>He told them of a time when he had spared an enemy who had begged for mercy, showing that even in battle, compassion must guide the sword. True saint-warriors, he taught, fight with one hand and bless with the other.</p>
        `
      },
      // 10 Sikh stories
      {
        id: 6002,
        title: "The Birth of Guru Nanak",
        author: "Jasbir Kaur",
        authorId: 54,
        excerpt: "The miraculous birth story of Guru Nanak, the founder of Sikhism.",
        genre: "Historical",
        mood: "Miraculous",
        length: "Short Story",
        resonance: 92,
        publishDate: "2024-12-20",
        readTime: "16 min",
        language: "english",
        content: `
          <p>In the village of Talwandi, Mata Tripta awaited the birth of her son. The midwife who delivered the child was amazed to find the room filled with divine light and fragrant flowers. The newborn, Nanak, was born circumambulated by a radiant aura.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Divine Birth</h3>
            <p class="text-gray-300">"From the beginning, the child was marked by the Divine." - Janamsakhi</p>
          </div>
          
          <p>As a child, Nanak displayed remarkable wisdom beyond his years. At age seven, when his father gave him money to buy groceries, Nanak instead distributed it to holy men and sadhus, saying he was purchasing something that would last forever. This act revealed his innate understanding of spiritual values over material possessions.</p>
        `
      },
      {
        id: 6003,
        title: "Guru Amar Das and the Well",
        author: "Rajinder Singh",
        authorId: 55,
        excerpt: "The story of Guru Amar Das's devotion and service that led to his spiritual elevation.",
        genre: "Biographical",
        mood: "Devotional",
        length: "Short Story",
        resonance: 89,
        publishDate: "2024-11-15",
        readTime: "14 min",
        language: "english",
        content: `
          <p>Guru Amar Das, at age 73, carried water from a deep well for the langar (community kitchen) of Guru Angad's settlement. Despite his age, he performed this humble service with unwavering dedication. His devotion was so intense that his feet became permanently embedded in the ground where he stood to draw water.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Service to Humanity</h3>
            <p class="text-gray-300">"Hard work and humility are the keys to spiritual advancement." - Guru Amar Das</p>
          </div>
          
          <p>Guru Angad recognized Amar Das's pure heart and selfless service, choosing him as successor despite having sons of his own. This story illustrates that in Sikhism, spiritual merit is valued above family lineage, and true greatness comes through dedicated service to others.</p>
        `
      },
      {
        id: 6004,
        title: "The Martyrdom of Guru Arjan Dev",
        author: "Baljit Singh",
        authorId: 56,
        excerpt: "The story of Guru Arjan Dev's sacrifice for religious freedom and truth.",
        genre: "Historical",
        mood: "Sacrificial",
        length: "Short Story",
        resonance: 94,
        publishDate: "2024-10-10",
        readTime: "18 min",
        language: "english",
        content: `
          <p>Guru Arjan Dev compiled the Adi Granth, the Sikh holy scripture, which included writings from saints of various faiths. Mughal Emperor Jahangir, influenced by jealous courtiers, imprisoned the Guru and tortured him to convert to Islam or remove passages offensive to Muslims.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Supreme Sacrifice</h3>
            <p class="text-gray-300">"I bear all this torture for Your sake, O Lord!" - Guru Arjan Dev's final words</p>
          </div>
          
          <p>On the orders of Jahangir, Guru Arjan Dev was subjected to excruciating torture, sitting on a red-hot iron plate with burning sand poured over his body. Throughout his ordeal, he remained steadfast in his faith, ultimately attaining martyrdom in 1606. His sacrifice became a defining moment in Sikh history.</p>
        `
      },
      {
        id: 6005,
        title: "Bhai Kanhaiya's Healing Touch",
        author: "Manjeet Kaur",
        authorId: 57,
        excerpt: "The tale of Bhai Kanhaiya who served both Sikh and Mughal soldiers with equal compassion.",
        genre: "Inspirational",
        mood: "Compassionate",
        length: "Short Story",
        resonance: 91,
        publishDate: "2024-09-05",
        readTime: "15 min",
        language: "english",
        content: `
          <p>Bhai Kanhaiya established a roadside stall to serve water to thirsty travelers, treating Sikh and Mughal soldiers alike during battles. When some Sikhs complained that he was helping their enemies, Guru Gobind Singh summoned him.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Universal Compassion</h3>
            <p class="text-gray-300">"Service to humanity is service to God." - Guru Gobind Singh</p>
          </div>
          
          <p>Instead of reprimanding him, Guru Gobind Singh blessed Bhai Kanhaiya and gave him the title of 'Sevadar' (volunteer). He explained that the Sikh principle of Sarbat da Bhala (welfare of all) meant serving all humanity regardless of religion or nationality. Bhai Kanhaiya became the patron saint of selfless service.</p>
        `
      },
      {
        id: 6006,
        title: "The Forty Liberated Ones",
        author: "Sukhdev Singh",
        authorId: 58,
        excerpt: "The story of the Chali Mukte, forty Sikhs who achieved liberation through their sacrifice.",
        genre: "Historical",
        mood: "Heroic",
        length: "Short Story",
        resonance: 93,
        publishDate: "2024-08-01",
        readTime: "17 min",
        language: "english",
        content: `
          <p>During the Battle of Chamkaur in 1704, Guru Gobind Singh was besieged in a mud fort by thousands of Mughal soldiers. Only forty of his followers remained with him. Despite being vastly outnumbered, these brave souls fought valiantly, knowing death was certain.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Immortal Warriors</h3>
            <p class="text-gray-300">"They died as lions, not as sheep." - Guru Gobind Singh</p>
          </div>
          
          <p>All forty attained martyrdom that day, but their sacrifice was not in vain. Guru Gobind Singh honored them by calling them the "Forty Liberated Ones" (Chali Mukte), recognizing that they had achieved the highest spiritual liberation through their fearless sacrifice for righteousness.</p>
        `
      },
      {
        id: 6007,
        title: "The Sacred Pool of Amritsar",
        author: "Harinder Singh",
        authorId: 59,
        excerpt: "The miraculous story of how the Harmandir Sahib (Golden Temple) came to be built.",
        genre: "Historical",
        mood: "Sacred",
        length: "Short Story",
        resonance: 92,
        publishDate: "2024-07-05",
        readTime: "16 min",
        language: "english",
        content: `
          <p>Guru Arjan Dev planned to build the holiest shrine of Sikhism in the middle of a lake. The site chosen was a patch of marshland owned by a devotee named Bhai Jetha. When the Guru offered to purchase the land, Bhai Jetha refused payment, insisting it was his honor to donate it.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Divine Architecture</h3>
            <p class="text-gray-300">"The temple shall have doors on all four sides, welcoming people from all directions." - Guru Arjan Dev</p>
          </div>
          
          <p>Guru Arjan invited a revered Muslim saint, Hazrat Mian Mir, to lay the foundation stone, demonstrating Sikhism's commitment to religious harmony. The resulting structure, with its golden dome and reflection in the sacred pool (Amrit Sarovar), became a symbol of spiritual equality and universal brotherhood.</p>
        `
      },
      {
        id: 6008,
        title: "The Five Beloved Ones",
        author: "Navjot Kaur",
        authorId: 60,
        excerpt: "The founding story of the Khalsa Panth and the Vaisakhi of 1699.",
        genre: "Historical",
        mood: "Transformative",
        length: "Short Story",
        resonance: 95,
        publishDate: "2024-06-10",
        readTime: "19 min",
        language: "english",
        content: `
          <p>On Vaisakhi day in 1699, Guru Gobind Singh addressed a large gathering of Sikhs. Suddenly, he drew his sword and called for a volunteer willing to sacrifice his head. Five men stepped forward, one by one, each believing they were going to their death.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Birth of the Khalsa</h3>
            <p class="text-gray-300">"Recognize no ancestry except that of the spirit." - Guru Gobind Singh</p>
          </div>
          
          <p>To everyone's amazement, Guru Gobind Singh reappeared with the five men, alive and radiant, having been baptized in the ceremony of Amrit Sanchar. These Five Beloved Ones (Panj Pyare) became the first members of the Khalsa, a community of committed Sikhs bound by equality and devotion to justice.</p>
        `
      },
      {
        id: 6009,
        title: "Guru Tegh Bahadur's Stand",
        author: "Daljit Singh",
        authorId: 61,
        excerpt: "The story of the Ninth Guru who sacrificed his life defending religious freedom.",
        genre: "Historical",
        mood: "Courageous",
        length: "Short Story",
        resonance: 90,
        publishDate: "2024-05-15",
        readTime: "17 min",
        language: "english",
        content: `
          <p>When Mughal Emperor Aurangzeb forced Kashmiri Pandits to convert to Islam, they sought help from Guru Tegh Bahadur. The Guru told them that the only way to stop forced conversions was to challenge the emperor's policy through the ultimate sacrifice.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Protector of the Oppressed</h3>
            <p class="text-gray-300">"To protect the righteous and destroy the wicked is the duty of every saint." - Guru Tegh Bahadur</p>
          </div>
          
          <p>Guru Tegh Bahadur publicly announced his opposition to forced conversions, knowing it would cost him his life. Arrested and tortured, he refused to convert or ask the emperor to spare the Pandits. His martyrdom in Delhi in 1675 earned him the title 'Hind-di-Chadar' (Shield of India).</p>
        `
      },
      {
        id: 6010,
        title: "The Langar Revolution",
        author: "Parminder Singh",
        authorId: 62,
        excerpt: "How Guru Nanak revolutionized society through the institution of community kitchen.",
        genre: "Social Reform",
        mood: "Revolutionary",
        length: "Short Story",
        resonance: 88,
        publishDate: "2024-04-20",
        readTime: "15 min",
        language: "english",
        content: `
          <p>In an era of rigid caste hierarchy, Guru Nanak established langar, a community kitchen where people of all castes, creeds, and social standings ate together as equals. Even kings and beggars sat side by side, breaking bread from the same plate.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Equality in Action</h3>
            <p class="text-gray-300">"All humans are equal in the eyes of the Divine." - Guru Nanak</p>
          </div>
          
          <p>When a proud Brahmin refused to eat in the langar because he didn't want to sit with lower castes, Guru Nanak served him food on a leaf. When the Brahmin dropped the leaf, Guru Nanak pointed out that even the food had fallen to the same level. This simple act demonstrated that artificial social distinctions have no place in spirituality.</p>
        `
      },
      {
        id: 6011,
        title: "The Jathedar's Resolve",
        author: "Gurpreet Singh",
        authorId: 63,
        excerpt: "A tale of Akali Phula Singh's unwavering defense of Sikh principles.",
        genre: "Historical",
        mood: "Resolute",
        length: "Short Story",
        resonance: 87,
        publishDate: "2024-03-25",
        readTime: "16 min",
        language: "english",
        content: `
          <p>Jathedar Akali Phula Singh, head of the Akal Takht, learned that Maharaja Ranjit Singh had married a Muslim woman without converting her. According to Sikh code of conduct, this was unacceptable. Despite being the Maharaja's mentor, Phula Singh ordered him to appear before the Takht for punishment.</p>
          
          <div class="my-8 p-6 bg-gray-800 rounded-xl border border-amber-500/30">
            <h3 class="text-xl font-bold mb-4 text-amber-300">Principles Above Power</h3>
            <p class="text-gray-300">"The Guru's word is supreme, even above kings." - Akali Phula Singh</p>
          </div>
          
          <p>Ranjit Singh appeared barefoot and begged forgiveness. Rather than impose severe punishment, Phula Singh made him pledge to defend the honor of Sikhism in battle. The Maharaja fought valiantly in the subsequent campaign, proving that true leadership means accountability to higher principles, not personal power.</p>
        `
      }
    ]
  };
  
  // Get stories for the specific religion
  const religiousStories = religiousStoriesData[religionSlug] || [];

  // Check if religion exists
  if (!religionInfo[religionSlug]) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      religionSlug,
      religionInfo: religionInfo[religionSlug],
      stories: religiousStories,
    },
  };
}

export default function ReligionPage({ religionSlug, religionInfo, stories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('resonant');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  
  const storiesPerPage = 12;

  // Apply search
  const filteredStories = stories.filter(story => {
    if (searchTerm && 
        !story.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !(authorsData.find(a => a.id === story.authorId)?.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        !story.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  // Sort stories
  const sortedStories = [...filteredStories].sort((a, b) => {
    switch (sortBy) {
      case 'resonant':
        return b.resonance - a.resonance;
      case 'newest':
        return new Date(b.publishDate) - new Date(a.publishDate);
      case 'oldest':
        return new Date(a.publishDate) - new Date(b.publishDate);
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        const authorA = authorsData.find(a => a.id === a.authorId)?.name || '';
        const authorB = authorsData.find(a => a.id === b.authorId)?.name || '';
        return authorA.localeCompare(authorB);
      default:
        return b.resonance - a.resonance;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const paginatedStories = sortedStories.slice(startIndex, startIndex + storiesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Head>
        <title>{religionInfo.name} - Nexus | Sacred Narratives</title>
        <meta name="description" content={religionInfo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        {/* Religion Banner */}
        <section className={`mb-12 rounded-2xl overflow-hidden relative bg-gradient-to-r ${religionInfo.color}`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 15px 15px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="relative p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-4">{religionInfo.icon}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                {religionInfo.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {religionInfo.description}
              </p>
              <div className="mt-6 text-gray-300">
                <span className="bg-black/30 px-4 py-2 rounded-full">
                  {filteredStories.length} Sacred Stories
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="mb-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/religious" className="text-gray-400 hover:text-amber-400 transition-colors">
              Religious Stories
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-200">{religionInfo.name}</span>
          </nav>
        </section>

        {/* Controls Bar */}
        <section className="mb-8 bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search titles, authors, keywords..."
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {/* View Mode Toggle */}
            <div className="flex bg-gray-700/50 rounded-xl p-1">
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-amber-600' : 'hover:bg-gray-600'}`}
                onClick={() => setViewMode('grid')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                className={`px-4 py-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-amber-600' : 'hover:bg-gray-600'}`}
                onClick={() => setViewMode('list')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sorting */}
          <div className="flex justify-end">
            <div className="flex items-center">
              <span className="mr-3 text-gray-400">Sort by:</span>
              <select
                className="bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="resonant">Most Resonant</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">Title</option>
                <option value="author">Author</option>
              </select>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <section className="mb-6 flex justify-between items-center">
          <div className="text-gray-400">
            Showing {startIndex + 1}-{Math.min(startIndex + storiesPerPage, sortedStories.length)} of {sortedStories.length} stories
          </div>
          <div className="text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
        </section>

        {/* Stories Grid/List */}
        {viewMode === 'grid' ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {paginatedStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative p-5">
                    <div className="h-48 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📜</div>
                        <span className="text-xs text-gray-400">Sacred Story</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold group-hover:text-amber-300 transition-colors line-clamp-1">{story.title}</h3>
                      <span className="bg-amber-900/50 text-amber-300 px-2 py-1 rounded text-xs whitespace-nowrap ml-2">
                        {story.resonance}% Res
                      </span>
                    </div>
                    
                    <p className="text-amber-400 text-sm mb-2">by {author?.name || story.author}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{story.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                      <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.length}</span>
                    </div>
                    
                    <div className="flex justify-between text-xs text-gray-500 mb-4">
                      <span>{story.readTime}</span>
                      <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                    </div>
                    
                    <Link href={`/story/${story.id}`}>
                      <button className="w-full py-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-amber-500 hover:to-orange-500">
                        Read Sacred Story
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          /* List View */
          <section className="space-y-4 mb-12">
            {paginatedStories.map((story) => {
              const author = authorsData.find(a => a.id === story.authorId);
              return (
                <div 
                  key={story.id} 
                  className="group flex flex-col md:flex-row bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-amber-500 transition-all duration-300"
                >
                  <div className="md:w-1/4 p-5">
                    <div className="h-40 bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl mb-1">📜</div>
                        <span className="text-xs text-gray-400">Sacred Story</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-5">
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold group-hover:text-amber-300 transition-colors">{story.title}</h3>
                        <span className="bg-amber-900/50 text-amber-300 px-2 py-1 rounded text-sm whitespace-nowrap ml-2">
                          {story.resonance}% Resonance
                        </span>
                      </div>
                      
                      <p className="text-amber-400 mb-3">by {author?.name || story.author}</p>
                      <p className="text-gray-400 mb-4 flex-grow">{story.excerpt}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.genre}</span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.mood}</span>
                        <span className="bg-gray-700/50 px-2 py-1 rounded text-xs">{story.length}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          <span className="mr-4">{story.readTime}</span>
                          <span>{new Date(story.publishDate).toLocaleDateString()}</span>
                        </div>
                        <Link href={`/story/${story.id}`}>
                          <button className="px-4 py-2 bg-gradient-to-r from-amber-600/80 to-orange-600/80 rounded-lg text-sm font-medium transition-all duration-300 hover:from-amber-500 hover:to-orange-500">
                            Read Sacred Story
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="mb-12">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Previous
              </button>
              
              {/* Page numbers */}
              {[...Array(totalPages)].map((_, index) => {
                const pageNum = index + 1;
                // Show first, last, current, and nearby pages
                if (
                  pageNum === 1 ||
                  pageNum === totalPages ||
                  (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded-lg ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                }
                
                // Show ellipsis for gaps
                if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                  return (
                    <span key={pageNum} className="px-2 py-2 text-gray-500">
                      ...
                    </span>
                  );
                }
                
                return null;
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages 
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                Next
              </button>
            </div>
          </section>
        )}

        {/* Back to Religious Stories Button */}
        <section className="text-center mb-12">
          <Link href="/religious">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-medium transition-all duration-300 border border-gray-700 hover:border-amber-500/50">
              ← Back to All Religious Stories
            </button>
          </Link>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-lg mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>© 2025 Nexus. Crafting the future of storytelling.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
