import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import { useState } from 'react'

import './listItem.scss'

export default function ListItem(index) {
  const [isHovered,setIsHovered]=useState(false);
  return (
    <div className='listItem' 
    style={{left: isHovered && index * 225-50}}
    onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
 <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 15 mins</span>
            <span className='limit'>18+</span>
            <span>2004</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem velit dicta quia corrupti quidem provident nostrum. Et commodi eligendi recusandae debitis, rerum magni doloribus sunt ipsa ducimus explicabo, veritatis necessitatibus.
            </div>
            <div className="genre">Action

            </div>
            </div>    </div>
  )
}
