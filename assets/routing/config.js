const httpUrl = 'http://api.orzy.me/exercise/fakes'
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
