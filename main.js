var app = new Vue({
    el: "#app",
    data: {
      user: {
        name: "",
      },
      editStatus:false,
      index: null,
      message: "Hello Vue!",
      persons: [
        { name: "Research" },
        { name: "Git comit" },
        { name: "Debug codes" },
      ],
    },
    methods:{
      addUser(){
          if(this.user.name==""){
              alert("input empty!")
          }else{
              this.persons.unshift(this.user);
              this.user ={
                  name: ""
              }
          }
        // this.persons.unshift(this.user);
        // this.user = {
        //     name: ""
        // }
      },
      removeItem(index){
        this.persons.splice(index,1);
      },
      editItem(id){
        this.editStatus = true;
        this.user = this.persons[id]; 
        this.index = id
      },
      updateItem(){
        this.persons[this.index] = this.user;
        this.editStatus = false;
        this.user = {name: ""}
      },
     }
  });
  



