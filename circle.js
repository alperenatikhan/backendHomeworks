const radiusArgument = process.argv.slice(2)[0]



const calculateAreaOfSphere=(r)=> {

        let pi = 3.14;

        let areaOfSphere = pi * r * r;

        console.log(areaOfSphere)

}

calculateAreaOfSphere(radiusArgument)
