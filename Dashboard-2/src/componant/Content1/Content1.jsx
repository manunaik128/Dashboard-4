import React from 'react'
import './Content1.css'
import Logo from '../../assets/logo.png'
import Dashboard from '../../assets/dash.png'
import Fav from '../../assets/fav.png'
import Share from '../../assets/share.png'
import Recycle from '../../assets/recycle.png'
import Clean from '../../assets/clean.png'
import Setting from '../../assets/setting.png'
import Upgrade from '../../assets/upgrade.png'
import Search from '../../assets/search.png'
import New from '../../assets/new.png'
import File from '../../assets/file.png'
import Gallery from '../../assets/gallery.png'
import Video from '../../assets/video.png'
import Music from '../../assets/music.png'
import Docs from '../../assets/docs.png'
import Folder from '../../assets/fold.png'
import More from '../../assets/more.png'


const Content1 = () => {
  return (
    <>

      <div className='main'>
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
            <h2 id='logo-name'>Cloudo</h2>
          </div>
          <div className="left-options">
            <ul>
              <li><a href=""> <img src={Dashboard} alt="" />Dashboard</a></li>
              <li><a href=""> <img src={Fav} alt="" />Favorities</a></li>
              <li><a href=""> <img src={Share} alt="" />Shared</a></li>
              <li><a href=""> <img src={Recycle} alt="" />Recycle Bin</a></li>
              <li id='space'><a href=""> <img src={Clean} alt="" />Deep clean</a></li>
              <li><a href=""> <img src={Setting} alt="" />Setting</a></li>
            </ul>
          </div>

          <div className="end">
            <div className="end-image">
              <img src={Upgrade} alt="" />

            </div>
            <div className="end-content">
              <p>Upgrade to <b>Pro</b> for <br /> unlimited storage</p>
              <a href=""><b>Upgrade Now</b></a>


            </div>
          </div>
        </div>

        <div className="middle">
          <div className="search">
            <div className="text">
              <img src={Search} alt="" />
              <input type="text" placeholder='Search Something' />
            </div>
            <div className="btn">
              <button> <img src={New} alt="" />Create New</button>
            </div>

          </div>

          <div className="items">
            <div className="child">
              <img src={File} alt="" /> <small>994 files</small>
            </div>

            <div className="child">
              <img src={Gallery} alt="" /> <small>2,328 files</small>
            </div>
            <div className="child">
              <img src={Video} alt="" /> <small>228 files</small>
            </div>
            <div className="child">
              <img src={Music} alt="" /> <small>424 files</small>
            </div>
            <div className="child">
              <img src={Docs} alt="" /> <small>824 files</small>
            </div>
          </div>
            <div className="folder-name">
              <h5>Folders</h5>
              <h6>View All</h6>
            </div>
          <div className="midd">
          
          

            <div className="folders">

              <div className="backup-image">
                <div className="image1">
                  <img src={Folder} alt="" />
                </div>

                <div className="image2">
                  <img src={More} alt="" />
                </div>
              </div>



              <div className="backup-info">
                <h5>Behans Posts</h5>
                <small>29 files</small>
              </div>

            </div>

                    <div className="folders">

              <div className="backup-image">
                <div className="image1">
                  <img src={Folder} alt="" />
                </div>

                <div className="image2">
                  <img src={More} alt="" />
                </div>
              </div>



              <div className="backup-info">
                <h5>Behans Posts</h5>
                <small>29 files</small>
              </div>

            </div>

                    <div className="folders">

              <div className="backup-image">
                <div className="image1">
                  <img src={Folder} alt="" />
                </div>

                <div className="image2">
                  <img src={More} alt="" />
                </div>
              </div>



              <div className="backup-info">
                <h5>Behans Posts</h5>
                <small>29 files</small>
              </div>

            </div>

                    <div className="folders">

              <div className="backup-image">
                <div className="image1">
                  <img src={Folder} alt="" />
                </div>

                <div className="image2">
                  <img src={More} alt="" />
                </div>
              </div>



              <div className="backup-info">
                <h5>Behans Posts</h5>
                <small>29 files</small>
              </div>

            </div>
                    <div className="folders">

              <div className="backup-image">
                <div className="image1">
                  <img src={Folder} alt="" />
                </div>

                <div className="image2">
                  <img src={More} alt="" />
                </div>
              </div>



              <div className="backup-info">
                <h5>Behans Posts</h5>
                <small>29 files</small>
              </div>

            </div>
          </div>

          <div className="files">

          </div>
        </div>

        <div className="right">

        </div>
      </div>

    </>
  )
}

export default Content1
