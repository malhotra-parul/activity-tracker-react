import photoOne from "./assets/users/humaaans(6).png";
import photoTwo from "./assets/users/humaaans(5).png";
import moment from "moment";

export const data = {
	"ok": true,
	"members": [{
			"id": "W012A3CDE",
			"real_name": "Egon Spengler",
			"tz": "America/Los_Angeles",
			"photo": photoOne,
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 1:54PM"
				},
				{
					"start_time": "Mar 1 2020  11:11AM",
					"end_time": "Mar 1 2020 2:00PM"
				},
				{
					"start_time": "Mar 16 2020  5:33PM",
					"end_time": "Mar 16 2020 8:02PM"
				}
			]
		},
		{
			"id": "W07QCRPA4",
			"real_name": "Glinda Southgood",
			"tz": "Asia/Kolkata",
			"photo": photoTwo,
			"activity_periods": [{
					"start_time": "Feb 1 2020  1:33PM",
					"end_time": "Feb 1 2020 2:54PM"
				},
				{
					"start_time": "Mar 1 2020  12:11AM",
					"end_time": "Mar 1 2020 3:00PM"
				},
				{
					"start_time": "Mar 16 2020  6:33PM",
					"end_time": "Mar 16 2020 9:02PM"
				}
			]
		}
	]
};

export const activityDates = data.members.map(member => {
	return member.activity_periods.map(({start_time}) => {
		return moment(start_time.slice(0,12)).format("YYYY-MM-DD");
	})
})[0];
