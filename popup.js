
   let a = [];
   let b = [];
   let x = a.length;
   let y = b.length;
   let title;
   let content;
   let url;
   document.addEventListener('DOMContentLoaded', function() {
     document.getElementById("save").addEventListener("click", saveData);
   });
//    chrome.storage.sync.get(['title','content','url'],function(note) {
//         title = note.title;
//         content = note.content;
//         url = note.url;

//    });
   function saveData() {
        title = document.getElementById("title").value;
        content = document.getElementById("content").value;
        url = document.getElementById("url").value;
        x++;
        a = [ ...a,{id : x ,title: title,content: content }];
        b = [...b,{id:x,url:url}];     
        for(let i = x;i<=x;i++)
        {
             let md = document.createElement("div");
             md.setAttribute('id','container'+i);
             md.setAttribute("style","width:100%;height:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-around");
             document.getElementById("maindiv").appendChild(md);
             let d1 = document.createElement("div");
             d1.setAttribute('id','displaydiv'+i);
             d1.setAttribute("style","width:70%;height:auto;word-wrap:break-word");
             document.getElementById("container"+i).appendChild(d1);
             let t = document.createElement("h1"); 
             t.setAttribute('id','finaltitle'+i);       
             t.innerHTML = title;                        
             document.getElementById("displaydiv"+i).appendChild(t);              
             let c = document.createElement("h3");
             c.setAttribute('id','finalcontent'+i);
             c.innerHTML = content;
             document.getElementById("displaydiv"+i).appendChild(c);
             let u = document.createElement("a");
             u.setAttribute('id','finalurl'+i);
             u.setAttribute('href',url);
             u.innerHTML = url;
             document.getElementById("displaydiv"+i).appendChild(u);
             let d2 = document.createElement("div");
             d2.setAttribute('id','deletediv'+i);
             d2.setAttribute("style","width:20%;height:auto;word-wrap:break-word");
             document.getElementById("container"+i).appendChild(d2);
             let btn = document.createElement("button");
             btn.setAttribute('id', 'deletebutton'+i);            
             btn.innerHTML = "delete";
             document.getElementById("deletediv"+i).appendChild(btn);
        }
     //    chrome.storage.sync.set({'title':title,'content':content,'url':url});
     //    document.getElementById("title").innerText = title;
     //    document.getElementById("content").innerText = content;
     //    document.getElementById("url").innerText = url;
   };