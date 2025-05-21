const asyncHandler= (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((error) => next(error))
    }
} 

// Wraps async route handlers (requestHandler) into asyncHandler 
// and forwards errors to Express error-handling middleware using next().


















/* const asyncHandler=(fn)=> async(req, res, next)=>{
    try{
      await fn(req, res,next ) 
    } catch(error){
        res.status(error.code || 500).json({
            success: false,
            message:error.message
        })
    }

}   */