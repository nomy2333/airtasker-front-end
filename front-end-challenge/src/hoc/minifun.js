import React from 'react';
import { fireAct, fireProfile, fireTask } from '../firebase';


export const checkArray = (data) => {
    for (let i = 0; i < data.length; i++) {
        fireProfile.orderByChild("id").equalTo(data[i]['pid']).on("child_added", function (x) {
            data[i] = { ...data[i], sulg: x.val().slug, abbreviated_name: x.val().abbreviated_name };
        })
        fireTask.orderByChild("id").equalTo(data[i]['tid']).on("child_added", function (snapshot) {
            data[i]['tname'] = snapshot.val().name
            data[i]['tslug'] = snapshot.val().slug
        })
    }
    // console.log(data)
    return data

}
export const firebaseLooper = (snapshot, update) => {
    const data = [];
    var eachdata = {};
    var splitWords = [];
    snapshot.forEach((childSnapshot) => {
        splitWords = childSnapshot.val().template.split(/{|}/);
        for (var i = 0; i < splitWords.length; i++) {
            if (splitWords[i].indexOf(':') != -1) {
                splitWords[i] = splitWords[i].split(':')[1];
            }
        }
        eachdata['pid'] = parseInt(splitWords[1]);
        eachdata['action'] = splitWords[2];
        splitWords.length > 3 ? (eachdata['tid'] = parseInt(splitWords[3])) : (eachdata['tid'] = '');
        fireProfile
            .orderByChild('id')
            .equalTo(eachdata['pid'])
            .on('child_added', function (x) {
                eachdata['abbreviated_name'] = x.val().abbreviated_name;
                eachdata['slug'] = x.val().slug;
                update();
            });

        fireTask
            .orderByChild('id')
            .equalTo(eachdata['tid'])
            .on('child_added', function (y) {
                eachdata['tname'] = y.val().name;
                eachdata['tslug'] = y.val().slug;
                update();

            });
        data.push({
            ...eachdata,
            id: childSnapshot.key
        });

    });


    return data;
};

