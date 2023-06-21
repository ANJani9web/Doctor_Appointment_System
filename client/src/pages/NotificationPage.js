import React from 'react'
import Layout from '../components/Layout'
import { Tabs, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NotificationPage = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state)=>state.user)

    // for handling mark all as read
    const handleMarkAllRead= async()=>{
        try {
            dispatch(showLoading())
            const res = await axios.post("/api/v1/user/get-all-notification",{
                userId:user._id
            },{
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
            dispatch(hideLoading())
            if(res.data.success){
                message.success(res.data.message)
            }else{
                message.error(res.data.message)
            }
        } catch (error) {
           dispatch(hideLoading())
           console.log(error)
           message.error('Something Went Wrong')
        }
     };
     
        // for handling delete all read
    const handleDeleteAllRead=()=>{
        console.log('delete')
    }
  return (

    <Layout>
        <h4 className='p-3 text-center'>Notification</h4>
        <Tabs>

            {/* for Mark all notification as read */}
            <Tabs.TabPane tab="unRead" key={0} >
              <div className="d-flex justify-content-end">
                <h3 className='p-3' onClick={handleMarkAllRead}>Mark All Read</h3>
              </div>
          {user?.notifcation.map((notificationMgs) => (
            <div className="card" style={{ cursor: "pointer" }}>
              <div
                className="card-text"
                onClick={() => navigate(notificationMgs.onClickPath)}
              >
                {notificationMgs.message}
              </div>
            </div>
                )
                )
              }
            </Tabs.TabPane>


        {/* for unmark all notification as unread */}
            <Tabs.TabPane tab="Read" key={1} >
              <div className="d-flex justify-content-end">
                <h3 className='p-3' onClick={handleDeleteAllRead}>Delete All Read</h3>
              </div>
            </Tabs.TabPane>
        </Tabs>
    </Layout>
  )
}

export default NotificationPage
