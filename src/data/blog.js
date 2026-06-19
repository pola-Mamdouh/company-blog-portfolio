const postBody = `
  <h1>هناك حقيقة مثبتة منذ زمن طويل وهي</h1>
  <p style="color:#5895d4">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف</p>
  <h3>هنالك العديد من الأنواع المتوفرة</h3>
  <p>هنالك العديد <b>الإنترنت</b> من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص.</p>
  <h3>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً</h3>
  <ol>
    <li>خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني</li>
    <li>إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات</li>
    <li>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز</li>
    <li>على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة</li>
  </ol>
`

const summary =
  'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها'

export const posts = [
  {
    id: 'post12',
    title: 'التدوينة الثانية عشر',
    date: '2021',
    thumb: '/images/blog/posts/post12.jpg',
    summary,
    tags: ['تجريبى 1', 'تجريبى 2'],
    categories: ['قسم اول'],
    body: postBody,
  },
  {
    id: 'post11',
    title: 'التدوينة الحادية عشر',
    date: '2021',
    thumb: '/images/blog/posts/post11.jpg',
    summary,
    tags: ['تجريبى 1', 'تجريبى 2'],
    categories: ['قسم اول'],
    body: postBody,
  },
  {
    id: 'post10',
    title: 'التدوينة العاشرة',
    date: '2021',
    thumb: '/images/blog/posts/post10.jpg',
    summary,
    tags: ['تجريبى 1', 'تجريبى 2'],
    categories: ['قسم اول'],
    body: postBody,
  },
  {
    id: 'post9',
    title: 'التدوينة التاسعة',
    date: '2021',
    thumb: '/images/blog/posts/post9.jpg',
    summary,
    tags: ['تجريبى 3', 'تجريبى 4'],
    categories: ['قسم ثانى'],
    body: postBody,
  },
  {
    id: 'post8',
    title: 'التدوينة الثامنة',
    date: '2021',
    thumb: '/images/blog/posts/post8.jpg',
    summary,
    tags: ['تجريبى 3', 'تجريبى 4'],
    categories: ['قسم ثانى'],
    body: postBody,
  },
  {
    id: 'post7',
    title: 'التدوينة السابعة',
    date: '2021',
    thumb: '/images/blog/posts/post7.jpg',
    summary,
    tags: ['تجريبى 5', 'تجريبى 6'],
    categories: ['قسم ثالث'],
    body: postBody,
  },
  {
    id: 'post6',
    title: 'التدوينة السادسة',
    date: '2021',
    thumb: '/images/blog/posts/post6.jpg',
    summary,
    tags: ['تجريبى 5', 'تجريبى 6'],
    categories: ['قسم ثالث'],
    body: postBody,
  },
  {
    id: 'post5',
    title: 'التدوينة الخامسة',
    date: '2021',
    thumb: '/images/blog/posts/post5.jpg',
    summary,
    tags: ['تجريبى 7', 'تجريبى 8'],
    categories: ['قسم رابع'],
    body: postBody,
  },
  {
    id: 'post4',
    title: 'التدوينة الرابعة',
    date: '2021',
    thumb: '/images/blog/posts/post4.jpg',
    summary,
    tags: ['تجريبى 7', 'تجريبى 8'],
    categories: ['قسم رابع'],
    body: postBody,
  },
  {
    id: 'post3',
    title: 'التدوينة الثالثة',
    date: '2021',
    thumb: '/images/blog/posts/post3.jpg',
    summary,
    tags: ['تجريبى 9', 'تجريبى 10'],
    categories: ['قسم خامس'],
    body: postBody,
  },
  {
    id: 'post2',
    title: 'التدوينة الثانية',
    date: '2021',
    thumb: '/images/blog/posts/post2.jpg',
    summary,
    tags: ['تجريبى 9', 'تجريبى 10'],
    categories: ['قسم خامس'],
    body: postBody,
  },
  {
    id: 'post1',
    title: 'التدوينة الأولى',
    date: '2021',
    thumb: '/images/blog/posts/post1.jpg',
    summary,
    tags: ['تجريبى 11', 'تجريبى 12'],
    categories: ['قسم سادس'],
    body: postBody,
  },
]

export const heroData = {
  firstTitle: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى',
  secondTitle:
    'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها',
}
