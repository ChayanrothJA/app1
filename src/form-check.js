import React from 'react';

export default function FormCheck() {
    const switchReq = React.useRef()
    const style = ['bold','italic','underline']
    const sizes = ['small','medium','large','larger']
    let checkedStyles = []
    let checkedSize = ''

    const OnChangCheck = (event) => {
        let checked = event.target.checked
        let value = event.target.value
        let idx = checkedStyles.indexOf(value)
        if(checked && idx === -1){
            checkedStyles.push(value)
        }else{
            checkedStyles.splice(idx,1)
        }
    }
    
    const onChangeRadio = (event) => {
        checkedSize = event.target.value
    }

    const onClickButton = () => {
        if(switchReq.current.checked){
            if(checkedStyles.length === 0){
                alert('please select style')
                return
            
        }else if (checkedSize === ''){
            alert('please selected size:')
            return
        }
    }

    let msg = 'select style(s); '+ checkedStyles.join(', ')
    msg += '\nselected size:' + checkedSize
    alert(msg)

}
    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style = {{ width:'450px' , background:'#cee' }}>
        <form>
            <span>font style:</span>&nbsp;&nbsp;
            {
                style.map((st,i) => {
                    return(
                        <div className='form-check form-check-inline mb2'>
                            <input type={'checkbox'} id={'check'+i } value={ st }
                            className= "form-check-input" onChange={OnChangCheck}/>
                        <lable htmlFor={'check'+i} className="form-check-label">{st}</lable>
                        </div>
                    )
                })
            }

            <br/>
            <span>font size:</span>&nbsp;&nbsp;
            {
                sizes.map((sz,i) => {
                    return (
                        <div className="form-check form-check-inline mb2">
                            <input type={"checkbox"} id={'radio'+i} name="fontSize" value={sz}
                                className="form-check-input" onChange={OnChangCheck}/>
                        <label htmlFor={'radio'+i} className="form-check-label">{checkedStyles}</label>
                        </div>
                    )
                    
                })
            }

            <div className="form-check form-switch mt-3">
                <input type="checkbox" id="sw" value="require"
                    className="form-check-input" ref={switchReq}/>
                <label htmlFor="sw" className="form-check-label">require</label>
            </div>

            <div className="text-center mt-4">
                <button type="button" className="btn btn-sm px-4 btn-primary"
                    onClick={onClickButton}>OK
                </button>
            </div>
        </form>
        </div>
    )
}