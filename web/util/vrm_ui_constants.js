/*******************************************************************************
 * Copyright (c) 2014 VMware, Inc. All rights reserved.
 ******************************************************************************/
//Common constants and API's
var constants = {
    // Configure language
    "LANGUAGE": "US_EN",
    "TRADEMARK_ASCII": "&#8482;",
    "VDI_CONSTANTS": "/vdi/constants",
    "API_RESPONSE_MSG_TIMEOUT": 3000,

    //Route paths:
    "physicalResourcesRoute": "physical-resources",
    "physicalRackRoute": "rack/:rackid",
    "virtualDomainsRoute": "virtual-domains",
    "virtualDomainDetailsRoute": "virtual-domain-details/:domainid",

    //API response
    "SUCCESS": "success",

    //Powering on system validation API's
    "triggerValidationAPI": "posv/validations",
    "validationResultAPI": "posv/validationResult",
    "downloadValidationStatusLogsAPI": "posv/validationResult/logs/download",
    "acceptEULAAPI": "core/property/eula",
    "singleRackAlertsAPI": "alert/state/NEW/severity/",
    "alertCountAPI" : "alert/count",
    "timeSyncAPI" : "core/timeSync/startTimeSync",
    "getTimeSyncProgressAPI" : "core/timeSync/getProgress",

    //dashboard service
    "buildResourcesForDashboardAPI": "core/vrack/stats",
    "buildDashboardForRackInfoAPI": "core/vrack/summary",
    "buildDashboardForRackDetailsAPI": "core/vrack/vrackdetails",
    "discoverRacksInfoAPI": "core/discoveredRacks",
    "getvCenterStatusAPI": "lrm/vcenter/canconnect",

    //physical resources service
    "getAllRackAPI": "prm/racks/consolidated-details",
    "getRackHostAPI": "prm/rack/",
    "consolidatedDetails": "/consolidated-details",
    "host": "/host/",
    "hostManagementAPI": "prm/host/activity/",
    "hostRemoteConsole": "prm/host/remoteconsole/",
    "remoteConsoleDetails": "/remoteconsoledetails",
    "remoteConsoleDisplay": "/remoteconsoledisplay",

    //change password service
    "changePasswordAPI": "security/permission/password",

    //property service
    "fetchPropertiesAPI": "core/properties",

    //initial setup config service
    "networkSetupsAPI": "prm/networks",
    "generalConfigAPI": "core/properties",
    "ipAllocationPlanAPI": "core/ipreallocation",
    "defaultNetworksAPI": "prm/defaultnetworks",

    //urls or paths
    "CONFIGURE_SYSTEM": "configure-system",

    //VDI Configuration service
    "createNewVDIConfigurationAPI": "vdi/create",
    "fetchVDIWorkloadConfigurationAPI": "vdi/workloadconfiguration/",
    "generalVDIConfigurationAPI": "vdi/general/",
    "systemConfigScreenSubmitForWorkloadConfigurationAPI": "vdi/systemconfig/",
    "networkScreenSubmitForWorkloadConfigurationAPI": "vdi/network/",
    "adScreenSubmitForVDIConfigurationAPI": "vdi/security/ad/",
    "vdMgmtScreenSubmitForVDIConfigurationAPI": "vdi/security/appvolumes/",
    "cancelFileUploadAPI": "vdi/cancelUpload/",
    "validateNetworkConfigurationWorkloadConfigurationAPI": "vdi/possibleoverlap/",
    "triggerWorkloadConfigurationAPI": "vdi/workloadconfiguration/",

    //LCM Service
    "fetchAllBundlesAPI": "lcm/bundles",
    "fetchBundleAPI": "lcm/bundles",
    "fetchAllAvailableUpdatesAPI": "lcm/inventory/upgrades",
    "fetchAllLCMSoftwareVersions": "lcm/evorack/versions",
    "scheduleUpdatesAPI": "lcm/upgrades",
    "initScheduledTimeByMinutes": 3,
    "fetchInprogressUpdatesAPI" : "lcm/upgrades/inprogress",
    "bundledownloadpost": "lcm/bundledownloads",
    "fetchDownloadsAvailable": "lcm/bundles",
    "fetchschduleStatusByBundleID": "/lcm/bundledownloads/mostrecent/bundle/",
    "fetchInstalledUpgrades" : "lcm/upgrades/completed",
    "cancelUpgradesPart1" : "lcm/upgrades/",
    "cancelUpgradesPart2" : "action/cancel",
    "schedulesUpgradesAPI":"lcm/upgrades/scheduled",
    "getBundlebyIdAPI" : "lcm/bundles/",
    "installedUpgradeType" : "InstalledUpdates",
    "scheduledUpgradeType" : "ScheduledUpdates",
    "inProgressUpgradeType" : "InProgressUpdates",
    "availableUpgradeType" : "AvailableUpdates",
    "inProgressStatusPart1":"Updating ",
    "inProgressStatusPart2":" of ",
    "fetchUpgradeStagesAPI": "lcm/upgrades/stages",
    "fetchUpgradeElementsAPI": "/lcm/upgrades/elements",
    "scheduleUpgradeAPI":"lcm/upgrades/",
    "fetchAllDomains": "vrm/logical-inventory/domains",

    "lcmRepoTabSelected": 'repository',
    "lcmUpdatesTabSelected": "updates",
    "lcmStatusTabSelected": "status",

    //virtual rack domains service
    "fetchDomainAPI": "domain",
    "expansionWorkflowAPI": "iaas/expansion",
    "maximumExpansionCapacityAPI": "iaas/max-expansion-capacity/",

    //privilege service
    "fetchPrivilegesAPI": "security/privileges",
    "loggedUserPrivileges": "security/loggedUserPrivileges",
    //user management
    "filterUsersOrGroupsAPI": "security/domain/",
    "fetchRoleListAPI": "security/roles",
    "fetchRoleAPI": "security/role/",
    "fetchDomainsAPI": "security/domains",
    "securityPermissionsAPI": "security/permissions",
    "rolesAPI": "security/roles",
    "removeRoleAPI": "security/role/",

    //System status
    "coreActivityTasksCountAPI": "core/activity/vrack/tasks/count",
    "eventCountDetailsAPI": "event/vrack/event/count",
    "coreAlertCountAPI": "alert/vrack/count",
    "auditCountAPI": "audit/vrack/event/count",
    "coreWorkflowAPI": "core/activity/vrack/workflows",
    "rerunWorkflowAPI": "core/workflow/",
    "workflowRerun": "/rerun",

    //URL Patterns
    "ui.url.status.system": "system-status",
    "ui.url.status.system.alert": "system-alert",
    "ui.url.status.system.event": "system-event",
    "ui.url.status.system.audit": "audit-event",
    "ui.url.lifecycle": "lifecycle",
    "ui.url.user": "user-management",
    "ui.url.vdi.settings": "vdi-settings",
    "ui.url.network.settings": "network-settings",
    "ui.url.help": "help",
    "ui.url.rack": "rack",

    //lcm download status
    "INPROGRESS": "INPROGRESS",

    "getRackNumberAPI" : "core/vrack/currentracknumber",
    "EVORACK": "EVORACK"
};

//System status screen
var systemStatusConstants = {
    "SYSTEM_STATUS_TASKS": "tasks",
    "SYSTEM_STATUS_AUDITS": "audits",
    "SYSTEM_STATUS_ALERTS": "alerts",
    "SYSTEM_STATUS_EVENTS": "events",
    "TOP_TEN_ALERTS": "alert/vrack/state/NEW/severity/ALL/1",
    "TOP_ALERTS_BY_SEVERITY": "alert/vrack/top/severity/"
};

//Powering On System Validation screen
var POSVConstants = {
    "FILTER_TYPE": "ALL",
    "ACTIVITY_TYPE_NOTIFICATIONS": "notifications",
    "printPOSVValidationLogsAPI": "api/1.0/posv/validationResult/logs/download?format=pdf",
    "downloadPOSVValidationLogsAPI": "api/1.0/posv/validationResult/logs/download?format=csv",
    "downloadPrintEULAAPI": "unsecure-vrm/eula_license.pdf"
};

//Main Controller screen
var mainControllerConstants = {
    "FUNCTION": "function",
    "FETCH_ACTIVITY_SERVER_ERROR": " Internal error occured in fetching activities.  "
};

//Change password screen
var changePasswordConstants = {
    "DATA_NEW_PASSWORD_MODEL": "data.newPassword",
    "DATA_CONFIRM_PASSWORD_MODEL": "data.confirmPassword",
    "SUCCESS": "Success",
    "NETWORK_CONFIG_URL": "network-config",
    "KEY_CODE": "code"
};

//Physical resources
var physicalResourceControllerConstants = {
    "SUCCESS": "Success",
    "FAILED": "Failed",
    "ACTION_TYPE_CYCLEHOST": "cycleHost",
    "ACTION_TYPE_ON": "on",
    "ACTION_TYPE_OFF": "off",
    "CONFIRM_POWER_CYCLE": "app-vrm/views/confirm-power-cycle.html",
    "SIZE": "sm",
    "STATIC": 'static',
    "EXTERNAL_CONNECTION": "EXTERNAL_CONNECTION",
    "NETWORK_TOPOLOGY_INFO": "topology/dashboard/topologyInformation",
    "NETWORK_TOPOLOGY_SWITCHES": "topology/dashboard/switches",
    "NETWORK_TOPOLOGY_SWITCH_INFO": "topology/dashboard/switchInformation",
    "NETWORK_TOPOLOGY_HOSTS": "topology/dashboard/hosts",
    "NETWORK_TOPOLOGY_HOST_INFO": "topology/dashboard/hostInformation",
    "OPERATIONAL": "Operational"
};

//Dashboard screen
var dashboardConstants = {
    "DISPLAY_STYLE_NONE": "display:none;",
    "SUCCESS": "Success",
    "VRACK_TYPE_SDN": "SDN",
    "DISPLAY_STYLE_BLOCK": "display:block;",
    "WHITE_COLOR": "#FFFFFF",
    "CPU_COLOR": "#6AA742",
    "GREY_COLOR": "#C5C5C5",
    "LIGHT_GREY_COLOR": "#E5E4E2",
    "MEMORY_COLOR": "#C2CD23",
    "STORAGE_COLOR": "#168383",
    "LOGICAL_RESOURCES_URL": "app/views/logical-resources.html",
    "PHYSICAL_RESOURCES_URL": "app/views/physical-resources.html",
    "SELECT_CONFIG_URL": "app/views/select-configuration.html",
    "WORKLOAD_DETAILS_URL": "app/views/workload-details.html",
    "BACKDROP_STYLE_STATIC": "static",
    "KEY_STORAGE": "storage",
    "KEY_CODE": "code",
    "TIMER_STOP": "timer-stop"

};

//Role Details screen
var roleDetailsConstants = {
    "FAILED": "Failed"

};

//VDI Configuration
var VDIConfigurationConstants = {
    "VDI_CONFIGURATION_URL": "/vdi-configuration",
    "LINKED": "linked",
    "VDI_CHECKLIST_URL": "/vdi-checklist",
    "OVA": "OVA",
    "ISO": "ISO",
    "reviewConfigForm": "reviewConfigForm"
};

var settingsConstants = {
    "PROPERTY_API": "core/properties"
};

var formats = ['MMMM dd, yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'fullDate'];

var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

var bundlePollingInterval = 900000;

var upgradePollingInterval = 900000;

var systemStatusPollingInterval = 120000;

var prdDefaultPollingInterval = 60000;

var uplinkConnectivityConstants = {
    "UPLINKLAGENABLED": "uplinkLAGEnabled",
    "TORUPLINKPORTS": "torUplinkPorts",
    "UPLINKSPEED": "uplinkSpeed",
    "UPLINKVLAN": "uplinkVLAN",
    "NSXROUTINGPROTOCOL": "NSXRoutingProtocol",
    "NSXBGPPEERIP": "NSXBGPPeerIP",
    "NSXBGPPEERAS": "NSXBGPPeerAS",
    "NSXOSPFAREA": "NSXOSPFArea",
    "NETWORKMTU": "networkMTU",
    "MASKIP": "MaskIP",
    "NEXTHOPIP": "NexthopIP",
    "UPLINKIP": "uplinkIP",
    "UPLINKTYPE": "uplinkType",
    "L2": "L2",
    "L3": "L3",
    "YES": "Yes",
    "NO": "No",
    "AUTOSPEED": "Auto"
};

var validationConstants = {
    "UPLINK_VLAN_MIN": 3,
    "UPLINK_VLAN_MAX": 3299,
    "UPLINK_PORT_MIN": 43,
    "UPLINK_PORT_MAX": 46,
    "IP_PARTS": ["Two", "Three", "Four"]
};

//Problem details screen
var ProblemDetailsConstants = {
    "downloadCSVAlertsAPI": "api/1.0/alert/download?format=csv",
    "downloadPDFAlertsAPI": "api/1.0/alert/download?format=pdf"
};

//IP Reallocation Progress screen
var IPReallocationProgressConstants = {
    "printdownloadAPI": "api/1.0/core/activity/vrack/workflows/",
    "downloadCSVAPI": "/tasks/download?format=csv",
    "printPDFAPI": "/tasks/download?format=pdf"
};

// domain removal states
var domainRemovalState = {
    UNINITIALIZED: "UNINITIALIZED",
    AWAITING_APPROVALS: "AWAITING_APPROVALS",
    READY_TO_EXECUTE: "READY_TO_EXECUTE",
    RUNNING: "RUNNING",
    INTERRUPTED: "INTERRUPTED",
    COMPLETE: "COMPLETE"
};

var bundleTypes = {
    EVORACK: "EVO SDDC Update",
    VMWARE_SOFTWARE: "VMware Software Update",
    LOWLEVEL: "Server Firmware Updates",
    NETWORKING: "Network Switch Updates",
    SECURITY: "VMware Security Updates"
};

var downloadStatuses = {
    ALL: 'ALL',
    PENDING: 'AVAILABLE',
    SCHEDULED: 'SCHEDULED',
    INPROGRESS: 'DOWNLOADING',
    SUCCESS: 'DOWNLOADED',
    FAILED: 'FAILED'
};

var timeSyncStatusMap = {
    NOT_STARTED : "NOT_STARTED",
    INPROCESS : "INPROCESS",
    COMPLETED_REBOOT_REQUIRED : "COMPLETED_REBOOT_REQUIRED",
    FAILED : "FAILED",
    COMPLETED : "COMPLETED"
};

var timeSyncComponentsStatusMap = {
    NOT_STARTED : "NOT_STARTED",
    COMPLETED : "COMPLETED",
    FAILED : "FAILED",
    IN_PROCESS : "IN_PROCESS"
};

var timezones = {
    "-12": "(GMT -12:00) Eniwetok, Kwajalein",
    "-11": "(GMT -11:00) Midway Island, Samoa",
    "-10": "(GMT -10:00) Hawaii",
    "-9": "(GMT -9:00) Alaska",
    "-8": "(GMT -8:00) Pacific Time (US & Canada)",
    "-7": "(GMT -7:00) Mountain Time (US & Canada)",
    "-6": "(GMT -6:00) Central Time (US & Canada), Mexico City",
    "-5": "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima",
    "-4": "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz",
    "-3.5": "(GMT -3:30) Newfoundland",
    "-3": "(GMT -3:00) Brazil, Buenos Aires, Georgetown",
    "-2": "(GMT -2:00) Mid-Atlantic",
    "-1": "(GMT -1:00) Azores, Cape Verde Islands",
    "0": "(GMT) Western Europe Time, London, Lisbon, Casablanca",
    "1": "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris",
    "2": "(GMT +2:00) Kaliningrad, South Africa",
    "3": "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg",
    "3.5": "(GMT +3:30) Tehran",
    "4": "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi",
    "4.5": "(GMT +4:30) Kabul",
    "5": "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent",
    "5.5": "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi",
    "5.75": "(GMT +5:45) Kathmandu",
    "6": "(GMT +6:00) Almaty, Dhaka, Colombo",
    "7": "(GMT +7:00) Bangkok, Hanoi, Jakarta",
    "8": "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong",
    "9": "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
    "9.5": "(GMT +9:30) Adelaide, Darwin",
    "10": "(GMT +10:00) Eastern Australia, Guam, Vladivostok",
    "11": "(GMT +11:00) Magadan, Solomon Islands, New Caledonia",
    "12": "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka"
};

var vrmUi = {
    getFormats: function() {
        return formats;
    },
    getSizes: function() {
        return sizes;
    },
    getBundlePollingInterval: function() {
        return bundlePollingInterval;
    },
    getUpgradePollingInterval: function() {
        return upgradePollingInterval;
    },
    getValue: function(key) {
        return constants[key];
    },
    getDashboardValue: function(key) {
        return dashboardConstants[key];
    },
    getPOSVControllerValue: function(key) {
        return POSVConstants[key];
    },
    physicalResourceControllerValue: function(key) {
        return physicalResourceControllerConstants[key];
    },
    getMainControllerValue: function(key) {
        return mainControllerConstants[key];
    },
    roleControllerValue: function(key) {
        return roleDetailsConstants[key];
    },
    getChangePasswordValue: function(key) {
        return changePasswordConstants[key];
    },
    getVDIConfigurationValue: function(key) {
        return VDIConfigurationConstants[key];
    },
    uplinkConnectivityValue: function(key) {
        return uplinkConnectivityConstants[key];
    },
    validatonConstant: function(key) {
        return validationConstants[key];
    },
    getSettingsValue: function(key) {
        return settingsConstants[key];
    },
    getSystemStatusValue: function(key) {
        return systemStatusConstants[key];
    },
    getProblemDetailsControllerValue: function(key) {
        return ProblemDetailsConstants[key];
    },
    getSystemStatusPollingInterval: function() {
        return systemStatusPollingInterval;
    },
    getIPReallocationProgressConstants: function(key) {
        return IPReallocationProgressConstants[key];
    },
    getDomainRemovalStates: function() {
        return domainRemovalState;
    },
    getprdDefaultPollingInterval: function() {
        return prdDefaultPollingInterval;
    },
    getBundleTypes: function() {
        return bundleTypes;
    },
    getDownloadStatuses: function() {
        return downloadStatuses;
    },
    fetchschduleStatusByBundleID: function() {
        return fetchschduleStatusByBundleID;
    },
    getTimeSyncStatuses: function() {
        return timeSyncStatusMap;
    },
    getTimeSyncComponentStatuses: function() {
        return timeSyncComponentsStatusMap;
    },
    getTimezones : function () {
        return timezones;
    }
};