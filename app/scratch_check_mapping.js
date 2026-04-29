
async function checkMapping() {
    try {
        await ZOHO.CREATOR.init();
        const res = await ZOHO.CREATOR.API.getAllRecords({
            appName: "order-management",
            reportName: "All_Branch_User_Role_Mapping",
            page: 1,
            pageSize: 1
        });
        console.log("Mapping Record Sample:", JSON.stringify(res.data?.[0], null, 2));
    } catch (e) {
        console.error("Check failed:", e);
    }
}
checkMapping();
