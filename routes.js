const UserRouter = require('./router/UserRouter');
const CategoryRouter = require('./router/CategoryRouter');
const SubjectRouter = require('./router/SubjectRouter')
const CourseRouter = require('./router/CourseRouter');
const NoticeRouter = require('./router/NoticeRouter');
const CartRouter = require('./router/CartRouter');
module.exports = (app) =>{
   app.use('/api/user',UserRouter)
   app.use('/api/course-Category',CategoryRouter)
   app.use('/api/subject',SubjectRouter);
   app.use('/api/course',CourseRouter);
   app.use('/api/notices',NoticeRouter);
   app.use('/api/cart',CartRouter);

}