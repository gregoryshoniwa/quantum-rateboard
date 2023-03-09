



                   
export default {    
    template: `
     <div>
       
     <div class="table100-body js-pscroll ps ps--active-x">

     <style>
     #peteTable td, #peteTable th{
         text-align:center;
     }
     </style>
   
       <table class="table table-bordered" id="peteTable">
           <thead>
               <tr class="row100 head">
               <th class="cell100 column1" style="font-size:26px; font-weight: 800;">CURRENCY</th>
                   <th class="cell100 column6" colspan="3" style="font-size:28px;text-align:center;font-weight: 800;">SELLING</th>
                   <th class="cell100 column6" colspan="3" style="font-size:28px;text-align:center;font-weight: 800;">BUYING</th>
               </tr>

               <!-- <tr class="row100 head">
                   <th class="cell100 column1" style="font-size:26px; font-weight: 800;"></th>
                   <th class="cell100 column6" colspan="3" style="font-size:26px; font-weight: 800;">RTGS</th>
                   <th class="cell100 column7" colspan="3" style="font-size:26px; font-weight: 800;">BOND</th>
               </tr> -->
           </thead>

           <tbody>
               <tr class="row100 body">
                   <td class="cell100 column1" style="font-size:24px; font-weight: 700;"><img src="./data/usd.png" alt="USD" style="height: 20px;  margin-top: 2px;">  USD</td>
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;"> 92.6064</td>
                    
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;"> 85.5</td>
               </tr>

               
               <tr class="row100 body">
                   <td class="cell100 column1" style="font-size:24px; font-weight: 700;"><img src="./data/zar.png" alt="USD" style="height: 20px; margin-top: 2px;">  ZAR</td>
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;"> -</td>
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;"> -</td>
               </tr>



               <tr class="row100 body">
                   <td class="cell100 column1" style="font-size:24px; font-weight: 700;"><img src="./data/gbp.png" alt="USD" style="height: 20px;  margin-top: 2px;"> GBP </td>
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;">-</td>
                   <td class="cell100 column6" colspan="3" style="font-size:27px; font-weight: 700;">-</td>
               </tr>
               
               

               

           </tbody>
       </table>

       <!-- Interbank Rate Table -->
       <table class="table table-bordered" id="peteTable" style="background: #00294aa1;">
           <!-- <thead>
               <tr class="row100 head">
                   <th class="cell100 column1" style="border:none"><img src="images/flags/usd.png" style="font-size:26px;text-align:center; padding-right:90px; font-weight: 800;"></th>
                   <th class="cell100 column6" colspan="3" style="font-size:26px;text-align:center; padding-right:90px; font-weight: 800;">INTERBANK RATE</th>
                   <th class="cell100 column7" colspan="3" style="font-size:26px;text-align:center; padding-right:90px; font-weight: 800;">14.9140</th>
               </tr>
           </thead> -->
           
                                       <tbody>
               <tr class="row100 body">
               <td class="cell100 column1" style="font-size:24px; font-weight: 700;"></td>
                   <td class="cell100 column6" colspan="3" style="font-size:24px; font-weight: 1000;">INTERBANK RATE</td>
                   <td class="cell100 column6" colspan="3" style="font-size:24px; font-weight: 700;"> 85.7467  </td>
               </tr>
           </tbody>

           <!-- <tbody>
       

           </tbody> -->
       </table>

   </div>

    </div>
    `,
    name: 'Board',
    
    data() {
      return {
        
      }
    },
    
    methods: { 
       async login(){

            if(this.ruzhowa_id.length < 5){
                Swal.fire(
                    'User Name Error',
                    'Please enter a valid username.',
                    'error'
                  )
            }else if(this.password.length < 4){
                Swal.fire(
                    'Password Error',
                    'Please enter a valid password.',
                    'error'
                  )
            }else{
                
                this.loadType = 'Logging In'
                this.loader = 'flex'
                var logintext = 'login'

                if(this.ruzhowa_id.includes("AA")){
                    logintext = 'login'
                }
                else if(this.ruzhowa_id.includes("NN")){
                    logintext = 'login2'
                }
                else if(this.ruzhowa_id.includes("EP")){
                    logintext = 'login3'
                }
                

               // console.log(logintext)
                await axios.post(`data/api/${logintext}.php`, {               
                    ruzhowa_id:this.ruzhowa_id,
                    password: this.password
                  })
                  .then(response => {
                   
                    this.loader = 'none'
                    //console.log(response)
                    if(response.data.status == 'success'){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your have successfully logged in.',
                            showConfirmButton: false,
                            timer: 1500
                          })
                              
                          this.$session.start();
                          this.$session.set('user', response.data.data);
                          this.$router.push("/dashboard");
                    }else{
                        Swal.fire(
                            'Login Failed',
                            'Wrong username or password, please try again.',
                            'error'
                          )
                        this.loader = 'none'
                    }
                    
                  })
                  .catch(error => {    
                          
                    console.log(error);
                  });

               
            }
          
            
             
        },
       

    },
    
  };