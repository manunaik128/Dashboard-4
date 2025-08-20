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
import Top from '../../assets/top.png'
import Notifi from '../../assets/notification.png'
import Pro from '../../assets/profile.jpeg'
import Down from '../../assets/down.png'
import Storage from '../../assets/storage.png'
import Import from '../../assets/import.png'


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
                <h5>Dribble Shots</h5>
                <small>20 files</small>
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
                <h5>Illustrations</h5>
                <small>149 files</small>
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
                <h5>Icons</h5>
                <small>59 files</small>
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
                <h5>Posters</h5>
                <small>80 files</small>
              </div>

            </div>
          </div>

          <div className="files">

            <div className="name">
              <p>Names <img src={Top} alt="" /></p>

              <a href=""><img src={Video} alt="" /> Proposal.docx</a> <br />
              <a href=""><img src={Video} alt="" /> Proposal.docx</a> <br />
              <a href=""><img src={Video} alt="" /> Proposal.docx</a> <br />
              <a href=""><img src={Video} alt="" /> Proposal.docx</a> <br />
              <a href=""><img src={Video} alt="" /> Proposal.docx</a> <br />
            </div>
            <div className="size">
              <p>Size <img src={Top} alt="" /> </p><br />

              <a href="">2.9 MB</a>
              <a href="">2.9 MB</a>
              <a href="">2.9 MB</a>
              <a href="">2.9 MB</a>
            </div>
            <div className="last-modified">
              <p>Last-modified <img src={Top} alt="" /></p>
            </div>
            <div className="members">
              <p>Members <img src={Top} alt="" /></p>
            </div>

          </div>
        </div>

        <div className="right">

          <div className="top">
            <div className="notification">
              <img src={Notifi} alt="" />
            </div>
            <div className="profile">
              <img src={Pro} alt="" />
              <div className="down">
                <img src={Down} alt="" />
              </div>
            </div>
          </div>
          <h5>Storage</h5>

          <div className="storage">


            <img src={Storage} alt="" />
          </div>

          <div className="storage-items">

            <div className="items">
            <div className="details">
                  <div className="st-image">
                  <img src={File} alt="" />
                  </div>
                <div className="st-detail">
                  <h5>Document</h5>
                  <small>994 files</small>
                </div>
                </div>

              <div className="data">
                <h4>2.5GB</h4>
              </div>
              </div>

              <div className="items">
            <div className="details">
                  <div className="st-image">
                  <img src={File} alt="" />
                  </div>
                <div className="st-detail">
                  <h5>Document</h5>
                  <small>994 files</small>
                </div>
                </div>

              <div className="data">
                <h4>2.5GB</h4>
              </div>
              </div>

              <div className="items">
            <div className="details">
                  <div className="st-image">
                  <img src={File} alt="" />
                  </div>
                <div className="st-detail">
                  <h5>Document</h5>
                  <small>994 files</small>
                </div>
                </div>

              <div className="data">
                <h4>2.5GB</h4>
              </div>
              </div>

              <div className="items">
            <div className="details">
                  <div className="st-image">
                  <img src={File} alt="" />
                  </div>
                <div className="st-detail">
                  <h5>Document</h5>
                  <small>994 files</small>
                </div>
                </div>

              <div className="data">
                <h4>2.5GB</h4>
              </div>
              </div>

              <div className="items">
            <div className="details">
                  <div className="st-image">
                  <img src={File} alt="" />
                  </div>
                <div className="st-detail">
                  <h5>Document</h5>
                  <small>994 files</small>
                </div>
                </div>

              <div className="data">
                <h4>2.5GB</h4>
              </div>
              </div>
            
          </div>
          <div className="import">
            <div className="import-file">
            <img src={Import} alt="" />
            <h3>Import Files</h3>
            </div>
          </div>


        </div>
      </div>

    </>
  )
}

export default Content1
