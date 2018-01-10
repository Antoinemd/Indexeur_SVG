

export function findAllIamgestWithShape(shape: string)
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
        if (err) return handleError(err);
        console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    });
}



export function findAllImagesWithColor(shape: string)
    // find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
    Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
        if (err) return handleError(err);
        console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    });

}

export function PopulateBDD(jsonArray: any[]) {



}