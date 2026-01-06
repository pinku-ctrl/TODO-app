const zod = require('zod');

const schema1 = zod.object({
	title: zod.string(),
	description: zod.string(),
})

const schema2 = zod.object({
	id: zod.string(),
})
/*
 {
   title: string,
   description: string,
 }

 {
   id: string,
 } 
*/
module.exports ={
  schema1, 
  schema2
}
