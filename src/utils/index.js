export   const screenshot = (fileName = String(Date.now()))=>{
    html2canvas(document.body,{ allowTaint:true,useCORS:true,scrollY:0,scrollX:0, ignoreElements:(e)=>{
      if(e.id === 'mokyBox-app'){
        return e;
      }
    }}).then(function(canvas) {
          let link = document.createElement('a');
          link.download = `${fileName}.png`;
          link.href = canvas.toDataURL('image/png',0.63);
          link.click();
          notification("已成功截图 下载中 " + fileName);
    }); 
  }

  export const querySelector = (selector) => document.querySelectorAll(selector);
  
  export const createButton = (text, onClick) => {
     const button = document.createElement("button");
     button.innerHTML = text;
     button.className = "mb-button";
     button.onclick = onClick;
     return button;
  };