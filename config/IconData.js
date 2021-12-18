import { FaFacebookF, FaTwitter, FaPinterest,FaInstagram } from 'react-icons/fa'
// all social Icon is here
export const IconData=[
    {
        icon:<FaFacebookF/>,
        class:'facebook',
        shareLink:"https://www.facebook.com/sharer/sharer.php?u=",
        profileLink:"https://www.facebook.com/userId"   // write your own username in the position of userId
    },
    {
       icon:<FaTwitter/>,
        class:'twitter',
        shareLink:"https://twitter.com/intent/tweet/?text=What%20else%20do%20we%20need%20to%20make%20this%20a%20success%3f&url=",
        profileLink:"https://twitter.com/?lang=en"  // write your own username in the position of userId
    },
    {
       icon:<FaPinterest/>,
       class:'pinterest',
       shareLink:"https://www.pinterest.com/pin/?text=What%20else%20do%20we%20need%20to%20make%20this%20a%20success%3f&url=",
       profileLink:"https://www.pinterest.com/usierId/_saved/" // write your own username in the position of userId
    },
    {
        icon:<FaInstagram/>,
        class:'instagram',
        shareLink:"https://www.facebook.com/sharer/sharer.php?u=",
        profileLink:"https://www.instagram.com/userId" // write your own username in the position of userId
    },

]