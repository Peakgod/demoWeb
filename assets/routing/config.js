const httpUrl = 'https://gist.githubusercontent.com/JoshuaYang/37ed2ca102efe190315c94b695e5833e/raw/136ea13c39867b40757625ddd99714f66ff89a13/fakeData.json'
const dataArr = [{
  title: 'LOGO',
  icon: '',
  to: ''
},
{
  title: 'Home',
  icon: '',
  to: '/'
},
{
  title: 'About',
  icon: '',
  to: '/about'
},
{
  title: 'Photo',
  icon: '',
  to: '/photo'
},
{
  title: 'Passionate',
  icon: '',
  to: '/passionate'
},
{
  title: 'Little practice',
  icon: '',
  // to: '/practice/practice',
  children: [{
    title: 'my first demo',
    icon: '',
    to: '/practice/first'
  },
  {
    title: 'my second demo',
    icon: '',
    to: '/practice/second'
  },
  {
    title: 'my third demo',
    icon: '',
    to: '/practice/third'
  }
  ]
}
]
export default {
  httpUrl,
  dataArr
}
