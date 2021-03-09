exports.currentUser=(req,res)=>{
 res.send(req.user)
}
exports.logoutUser=(req,res)=>{
 req.logout();
}