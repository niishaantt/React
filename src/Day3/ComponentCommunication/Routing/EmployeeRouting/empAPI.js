
const empObj = {

    empList: 
    [
        {
          "empid": 1,
          "empName": "John Doe",
          "empSallary": 50000
        },
        {
          "empid": 2,
          "empName": "Jane Smith",
          "empSallary": 60000
        },
        {
          "empid": 3,
          "empName": "Michael Johnson",
          "empSallary": 55000
        }
      ],

      getAllEmps:function(){
        return this.empList
      },

      getEmp:function(id){
        let emp = this.empList.find(emp=>emp.empid === id)

        return emp
      }


}

export default empObj