import wx from "/onekit/wx";
Component({
  mixins: [],
  data: {
    hideContact: true
  },
  didMount() { 
    var openType;
    var scope;
    switch(this.props.openType){
      case "getPhoneNumber":openType="getAuthorize";scope="phoneNumber";break;
      case "getUserInfo":openType="getAuthorize";scope="userInfo";break;
      default:openType=openType;
    }
    this.setData({openType,scope});
  },
  didUpdate() { },
  didUnmount() { },
  props: {},
  methods: {
    contactBG_tap() {
      this.setData({ hideContact: true });
    },
              /*getAuthorize(){
 switch (this.props.scope) {
          case "phoneNumber":
          wx.getUserInfo({
            success(res){
              e.detail = res;
              that.props.onGetuserinfo(e);
            }
          });
          break;
            case "phoneNumber":
            wx.getPhoneNumber({
            success(res){
              e.detail = res;
              that.props.onGetphonenumber(e);
            }
          })
            break;wxGetUserInfo
          default:throw new Error(this.props.scope);
              }
              },*/
              onGetAuthorize(e){
               var that = this;
   switch (this.props.openType) {

          
          case "getUserInfo":
          
          if(that.props.onGetuserinfo){
          wx.getUserInfo({
            withCredentials:true,
            success(res){
              e.detail = res;
              that.props.onGetuserinfo(e);
            }
          });
          }
            break;
          case "getPhoneNumber":
    
         if(this.props.onGetphonenumber){
         //  console.log(e)
          wx.getPhoneNumber({
            success(res){
              e.detail = res;
              that.props.onGetphonenumber(e);
            }
          });
          }
            break;
          default:
          throw new Error(this.props.openType);
        }
              },
              onError(e){
                console.log(e);
              },
    button_onTap(e) {
      var that = this;
      if (this.props.openType) {
        switch (this.props.openType) {
          case "contact":
            this.setData({ hideContact: false });
            break;
          case "share":
            wx.showShareMenu({
              success(){

              }
            });
            break;
            /*
            case "getAuthorize":
            that.getAuthorize();
            break;*/
          /*
          case "getUserInfo":
          
          if(that.props.onGetuserinfo){
          wx.getUserInfo({
            success(res){
              e.detail = res;
              that.props.onGetuserinfo(e);
            }
          })
          }
            break;
          case "getPhoneNumber":
    
         if(that.props.onGetphonenumber){
          wx.getPhoneNumber({
            success(res){
              e.detail = res;
              that.props.onGetphonenumber(e);
            }
          })
          }
            break;*/
              case "getUserInfo":
                  case "getPhoneNumber":
                  break;
          case "launchApp":
            break;
          case "openSetting":
            /*my.navigateTo({
              url:"/onekit/page/setting/setting"
            });*/
            wx.openSetting({

            });
            break;
          case "feedback":
            break;
          default:
          throw new Error(this.props.openType);
        }
      }
      if (this.props.onTap) { this.props.onTap(e); }
    },
  },
});
