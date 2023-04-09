import { useEffect, useState } from "react";
import BoxImportantIcon from "../../../assets/box-important.svg";
import DotIcon from "../../../assets/dot-icon.svg";
import DotIconRed from "../../../assets/dot-red.svg";
import { WhiteButtonComponent } from "../../Shared/button-component";
import DashboardTopBar from "../../Shared/dashboard-top-bar";
import HolidayCard from "../../Shared/holiday-card";
import WrapTextComponent from "../../Shared/wrap-text-component";
import { connect } from "react-redux";
import { ActionTypes } from "../../../store/actionType";
import { getMyDetailsService } from "../../../Business/Employee/GetEmpDetailsService";
import { IEmployee } from "../../../db/Model/Employee";
import { getCompanyAnnoucements } from "../../../Business/Announcements/GetAnnouncement";
import { IAnnouncement } from "../../../db/Model/Announcement";
import { capitalizeFirstLetter, findTheDateGap, getDashboardDateTime } from "../../../Util/UtilityService";
import { getCompanyHolidayList } from "../../../Business/Holiday/GetHolidayService";
import { IHoliday } from "../../../db/Model/Holiday";

const DashboardView = (props: any) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isBirthday, setIsBirthday] = useState(false);
    const [annoucementList, setAnnoucementList] = useState<IAnnouncement[]>([]);
    const [holidayList, setHolidayList] = useState<IHoliday[]>([]);
    const [myDetails, setMyDetails] = useState<IEmployee | number>();

    useEffect(() => {
        loadMyDetails();
    }, []);

    const loadMyDetails = async () => {
        try {
            const token = props.idToken;
            if (!props.user.admin) {
                const res = await getMyDetailsService(token);
                if (res !== 401) {
                    setMyDetails(res);
                    props.saveMyDetails(res);
                    if (typeof (res) == "object") {
                        var mydate = new Date(res?.birthDay);
                        var now = new Date();
                        if (mydate.getDate() === now.getDate() && mydate.getMonth() === now.getMonth()) {
                            setIsBirthday(true);
                        } else {
                            setIsBirthday(false);
                        }
                    }
                }
            }

            const annoucementList = await getCompanyAnnoucements(token);
            const holidayList = await getCompanyHolidayList(token);
            setAnnoucementList(annoucementList);
            setHolidayList(holidayList);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
        }
    }

    return <>
        {isLoading ? <div>
            <p>Loading...</p>
        </div> : <>
            <DashboardTopBar
                isBirthday={isBirthday}
                myDetails={myDetails}
                profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
                wish={1} />

            <div className="d-flex d-flex-column button-color" style={{
                padding: "20px",
                marginTop: "15px",
                width: "84vw", height: "140px", borderRadius: "6px"
            }}>
                <div className="d-flex d-flex-row">
                    <WrapTextComponent text={annoucementList.length + " Unread Announcements"} icon={DotIcon} />
                </div>

                <div className="d-flex d-flex-row justify-content-between">
                    {
                        annoucementList.length > 0 ?
                            <div className="box-white-bold">{capitalizeFirstLetter(annoucementList[0].announcementTitle)}</div>
                            : <></>}
                    <WrapTextComponent text={"  Announcement"} icon={BoxImportantIcon} />
                </div>

                <p className="box-white-normal" style={{ marginBottom: "1px" }}>{
                    capitalizeFirstLetter(annoucementList[0].message)
                }</p>

                <div className="d-flex d-flex-row justify-content-end">
                    <WhiteButtonComponent text="See all Announcements" onClick={() => {

                    }} />
                </div>
            </div>

            <div className="d-flex d-flex-column bg-color-white align-item-start" style={{
                width: "500px",
                marginTop: "10px",
                padding: "15px",
                borderRadius: "10px", height: "250px"
            }}>
                <div style={{ height: "20px", fontWeight: "bold", fontSize: "13px" }}>
                    <img src={DotIconRed} height={"10px"} style={{ color: "Red", marginRight: "10px" }} />
                    {"Special Holidays"}
                </div>
                <div className="d-flex d-flex-column" style={{ marginTop: "10px" }}>
                    {
                        holidayList.map((holiday) => {
                            return <HolidayCard color={"#4E84C1"}
                                date={getDashboardDateTime(holiday.eventDate.toString())}
                                holiday={holiday.holidayTitle}
                                remaining={findTheDateGap(new Date(), holiday.eventDate) + " days more"} />;
                        })
                    }
                </div>
            </div>
        </>}
    </>
}

const mapStateToProps = (state: any) => {
    return {
        idToken: state.idToken,
        user: state.user,
        myDetails: state.myDetails
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        saveMyDetails: (myDetails: IEmployee) => dispatch({
            type: ActionTypes.SAVE_MY_DETAILS,
            payload: { myDetails }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);