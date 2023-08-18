import React,{Component} from "react";
export default class button extends Component{
    constructor(){ 
        super()
        toHaveStyle.onClickButtonOK = this.onClickButtonOK.bind(this)
    }
    showAlert(msg){
        alert(msg);
 
    }

    // onClickButtonOK(){ เเก้ปัญหาการใช้ this ใน clss Component
    //     this.showAlert("hello")
    // }

    onClickButtonOK = () => {  // ทำเป็น arrow key 
        this.showAlert("hello")
    }
    render(){
        return <button onClick={this.onClickButtonOK}>OK</button>
    }
}