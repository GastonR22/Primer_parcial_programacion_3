# Primer_parcial_programacion_3

-- Orden de creacion de las tablas

1 - sequelize model:generate --name Rol --attributes description:string

2 - sequelize model:generate --name Payment --attributes type:string

3 - sequelize model:generate --name Brand --attributes name:string

4 - sequelize model:generate --name Category --attributes name:string

5 - sequelize model:generate --name Size --attributes waist:integer

6 - sequelize model:generate --name Gender --attributes type:string

7 - sequelize model:generate --name Adress --attributes street:string,number:integer

8 - sequelize model:generate --name State --attributes description:string

9 - sequelize model:generate --name Shipping --attributes street:string,number:integer,orderId:integer 

10 - sequelize model:generate --name Product --attributes 
name:string,price:decimal,stock:integer,stock_min:integer,stock_max:integer,brandId:integer,categoryId:integer,sizeId:integer,genderId:integer,paymentId:integer

11 - sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,adressId:integer

12 - sequelize model:generate --name User_has_rol --attributes userId:integer,rolId:integer

13 - sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,userId:integer,stateId:integer,shippingId:integer,productId:integer

14 - sequelize model:generate --name OrderDetails --attributes quantity:decimal,subtotal:decimal,orderId:integer,productId:integer

15 - sequelize model:generate --name Image --attributes name:string,productId:integer



-- Nombre DB que se debe crear ----> synthwave

-- Comando de migrado utilizado ----> node_modules/.bin/sequelize db:migrate
