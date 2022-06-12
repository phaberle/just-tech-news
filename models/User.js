const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { STRING } = require('sequelize');
const bcrypt = require('bcrypt'); // <-- async function available 

//create our user model
class User extends Model {
    checkPassword(loginPw){
        return bcrypt.compareSync(loginPw,this.password); // <-- compares plain text password with hash if the pair match from db record, success.
    }
 }

//define table columns and configuration

User.init(
    {
        //define and id column
        id: {
            //use the special sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivalent of SQL's 'NOT NULL' option
            allowNUll: false,
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true

        },
        //define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // this means the password must be at least four characters long
                len: [4]
            }
        }
    },
    {
        hooks: { // <-- hooks placement to encrypt passwords for create and update of user information
            //setup beforeCreate lifecycle "hook" functionality for before create and before update
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
              updatedUserData.password=await bcrypt.hash(updatedUserData.password, 10);
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }

);

module.exports = User;
