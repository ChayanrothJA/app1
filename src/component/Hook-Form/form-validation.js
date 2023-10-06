import React from 'react';
import { useForm } from 'react-hook-form';  // Importing the useForm hook

export default function FormValidation() {
    const cats = [['100', 'ไอที'], ['200', 'เครื่องจักรกล'], ['300', 'เคมีภัณฑ์']];
    const opts = ['Option 1', 'Option 2', 'Option 3'];
    const inputFile = React.createRef();
    const { register, handleSubmit, formState: { errors } } = useForm();  // Using useForm hook

    const onSubmitForm = (event) => {
        let maxNumFiles = 3
        let maxSize = 300

    if (inputFile.current.files.length > maxNumFiles) {
        alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
        event.preventDefault();
        return;
      }

    for (let file of inputFile.current.files) {
        if (file.size > maxSize * 1000) {
          alert(`ขนาดไฟล์ไม่เกิน (${maxSize} KB)`);
          event.preventDefault();
          return;
        }
      }  
    
    }
  // Continue with form submission if all checks passed
    const err = {
        fontSize: 'smaller',
        color: 'red'
    };
  
    return (
        <div className="mt-3 mb-5 mx-auto p-3 rounded"
        style={{ width:'400px', background:'#cee'}}>

    <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="form-group mb-3">
            <label htmlFor="cats" className="YourClassNameHere">หมวดหมู่ *</label>
            <select id="cats" className="form-select form-select-sm">
      {
        cats.map(item => {
            return <option key={item[0]} value={item[0]}>{item[1]}</option>;
          })
          
      }
    </select>
    </div>
    <div className="form-group mb-3">
        <label htmlFor="name">ชื่อสินค้า *</label>
        <input type="text" id="name" name="name" maxLength="50"
            className="form-control form-control-sm"
            {...register('name', {required: true, maxLength: 30})} />
            {errors.name && <div style={err}>กรุณาระบุชื่อสินค้า</div>}
    </div>
    <div className="form-group mb-3">
        <label htmlFor="price">ราคาสินค้า *</label>
        <input
            type="number"
            id="price"
            name="price"
            min="0"
            step="any"
            className="form-control form-control-sm"
            {...register('price', { validate: value => parseFloat(value) > 0 })}/>
        {errors.price && <div style={err}>กรุณาระบุราคาสินค้าที่มีค่ามากกว่า 0</div>}
    </div>
    <div className="form-group mb-3">
        <label htmlFor="detail">รายละเอียดสินค้า *</label>
        <textarea id="detail" name="detail" rows="2" maxLength="250"
            className="form-control form-control-sm"
            {...register('detail', { required: true, minLength: 1, maxLength: 200 })}>
        </textarea>
        {errors.detail && <div style={err}>กรุณาระบุรายละเอียดสินค้า (1-200 ตัวอักษร)</div>}
    </div>
    <div className="form-group mb-3">
        <label htmlFor="dateAdded">วันที่เพิ่มสินค้า *</label>
        <input type="date" id="dateAdded" name="dateAdded"
        className="form-control form-control-sm"
        {...register('dateAdded', { required: true })}/>
    {errors.dateAdded && <div style={err}>กรุณาระบุวันที่เพิ่มสินค้า</div>}
    </div>
    <div className="form-group mb-3">
        <label htmlFor="file" className="form-label">ภาพสินค้า * (ไม่เกิน 3 ไฟล์ 
            ขนาดสูงสุด 300 KB/ไฟล์)</label>
        <input type="file" id="file" accept="image/*" 
            className="form-control form-control-sm" ref={inputFile} multiple/>
    </div>
    
        {opts.map((opt, i) => {
            return(
            <div className="form-check form-check-inline mb-2" key={i}>
                <input type="checkbox" id={'opt' + i} value={opt}
                    className="form-check-input"/>
            <label htmlFor={'opt' + i} className="form-check-label">{opt}</label>
        </div>
        )
    })
}
    <div className="text-center mt-4">
        <button className="btn btn-primary btn-sm px-4">OK</button>
        </div>
    </form>
    </div>
    )
}


  

//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>



// </div>
//   );
  
// }
    