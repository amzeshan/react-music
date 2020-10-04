import React from 'react'

import Slider from '../../components/slider';

import {Content} from './style'

import Scroll from '../../baseUI/scroll/index';

import RecommendList from '../../components/list';

function Recommend(){
    const bannerList = [1,2,3,4].map (item => {
        return { imageUrl: "http://p1.music.126.net/XRJo9DIMhuq18yEQHHoEBQ==/109951165363711478.jpg" }
      });

      const recommendList = [1,2,3,4,5,6,7,8,9].map (item => {
        return {
          id: 1,
          picUrl: "https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg",
          playCount: 17171122,
          name: "朴树、许巍、李健、郑钧、老狼、赵雷"
        }
      });
    
 return (
   //better-scroll 的原理并不复杂，就是在容器元素高度固定，当子元素高度超过容器元素高度时，通过 transfrom 动画产生滑动效果，因此它的使用原则就是外部容器必须是固定高度，不然没法滚动。而 Content 就是这个外部容器。
   <Content>
      <Scroll className="list">
    <div>
       <Slider bannerList={bannerList}></Slider>
       <RecommendList recommendList={recommendList}></RecommendList>
    </div>
    </Scroll>
    </Content>
     
 )
}
export default React.memo (Recommend);