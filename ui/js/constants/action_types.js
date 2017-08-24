export const CHANGE_PATH = "CHANGE_PATH";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const HISTORY_NAVIGATE = "HISTORY_NAVIGATE";
export const SHOW_SNACKBAR = "SHOW_SNACKBAR";
export const REMOVE_SNACKBAR_SNACK = "REMOVE_SNACKBAR_SNACK";
export const WINDOW_FOCUSED = "WINDOW_FOCUSED";
export const CHANGE_AFTER_AUTH_PATH = "CHANGE_AFTER_AUTH_PATH";
export const DAEMON_READY = "DAEMON_READY";
export const DAEMON_VERSION_MATCH = "DAEMON_VERSION_MATCH";
export const DAEMON_VERSION_MISMATCH = "DAEMON_VERSION_MISMATCH";

// Upgrades
export const UPGRADE_CANCELLED = "UPGRADE_CANCELLED";
export const DOWNLOAD_UPGRADE = "DOWNLOAD_UPGRADE";
export const UPGRADE_DOWNLOAD_STARTED = "UPGRADE_DOWNLOAD_STARTED";
export const UPGRADE_DOWNLOAD_COMPLETED = "UPGRADE_DOWNLOAD_COMPLETED";
export const UPGRADE_DOWNLOAD_PROGRESSED = "UPGRADE_DOWNLOAD_PROGRESSED";
export const CHECK_UPGRADE_AVAILABLE = "CHECK_UPGRADE_AVAILABLE";
export const UPDATE_VERSION = "UPDATE_VERSION";
export const SKIP_UPGRADE = "SKIP_UPGRADE";
export const START_UPGRADE = "START_UPGRADE";

// Wallet
export const GET_NEW_ADDRESS_STARTED = "GET_NEW_ADDRESS_STARTED";
export const GET_NEW_ADDRESS_COMPLETED = "GET_NEW_ADDRESS_COMPLETED";
export const FETCH_TRANSACTIONS_STARTED = "FETCH_TRANSACTIONS_STARTED";
export const FETCH_TRANSACTIONS_COMPLETED = "FETCH_TRANSACTIONS_COMPLETED";
export const UPDATE_BALANCE = "UPDATE_BALANCE";
export const CHECK_ADDRESS_IS_MINE_STARTED = "CHECK_ADDRESS_IS_MINE_STARTED";
export const CHECK_ADDRESS_IS_MINE_COMPLETED =
  "CHECK_ADDRESS_IS_MINE_COMPLETED";
export const SET_DRAFT_TRANSACTION_AMOUNT = "SET_DRAFT_TRANSACTION_AMOUNT";
export const SET_DRAFT_TRANSACTION_ADDRESS = "SET_DRAFT_TRANSACTION_ADDRESS";
export const SEND_TRANSACTION_STARTED = "SEND_TRANSACTION_STARTED";
export const SEND_TRANSACTION_COMPLETED = "SEND_TRANSACTION_COMPLETED";
export const SEND_TRANSACTION_FAILED = "SEND_TRANSACTION_FAILED";

// Content
export const FETCH_FEATURED_CONTENT_STARTED = "FETCH_FEATURED_CONTENT_STARTED";
export const FETCH_FEATURED_CONTENT_COMPLETED =
  "FETCH_FEATURED_CONTENT_COMPLETED";
export const RESOLVE_URI_STARTED = "RESOLVE_URI_STARTED";
export const RESOLVE_URI_COMPLETED = "RESOLVE_URI_COMPLETED";
export const RESOLVE_URI_CANCELED = "RESOLVE_URI_CANCELED";
export const FETCH_CHANNEL_CLAIMS_STARTED = "FETCH_CHANNEL_CLAIMS_STARTED";
export const FETCH_CHANNEL_CLAIMS_COMPLETED = "FETCH_CHANNEL_CLAIMS_COMPLETED";
export const FETCH_CLAIM_LIST_MINE_STARTED = "FETCH_CLAIM_LIST_MINE_STARTED";
export const FETCH_CLAIM_LIST_MINE_COMPLETED =
  "FETCH_CLAIM_LIST_MINE_COMPLETED";
export const FILE_LIST_STARTED = "FILE_LIST_STARTED";
export const FILE_LIST_SUCCEEDED = "FILE_LIST_SUCCEEDED";
export const FETCH_FILE_INFO_STARTED = "FETCH_FILE_INFO_STARTED";
export const FETCH_FILE_INFO_COMPLETED = "FETCH_FILE_INFO_COMPLETED";
export const FETCH_COST_INFO_STARTED = "FETCH_COST_INFO_STARTED";
export const FETCH_COST_INFO_COMPLETED = "FETCH_COST_INFO_COMPLETED";
export const LOADING_VIDEO_STARTED = "LOADING_VIDEO_STARTED";
export const LOADING_VIDEO_COMPLETED = "LOADING_VIDEO_COMPLETED";
export const LOADING_VIDEO_FAILED = "LOADING_VIDEO_FAILED";
export const DOWNLOADING_STARTED = "DOWNLOADING_STARTED";
export const DOWNLOADING_PROGRESSED = "DOWNLOADING_PROGRESSED";
export const DOWNLOADING_COMPLETED = "DOWNLOADING_COMPLETED";
export const PLAY_VIDEO_STARTED = "PLAY_VIDEO_STARTED";
export const FETCH_AVAILABILITY_STARTED = "FETCH_AVAILABILITY_STARTED";
export const FETCH_AVAILABILITY_COMPLETED = "FETCH_AVAILABILITY_COMPLETED";
export const FILE_DELETE = "FILE_DELETE";
export const ABANDON_CLAIM_STARTED = "ABANDON_CLAIM_STARTED";
export const ABANDON_CLAIM_SUCCEEDED = "ABANDON_CLAIM_SUCCEEDED";
export const FETCH_CHANNEL_LIST_MINE_STARTED =
  "FETCH_CHANNEL_LIST_MINE_STARTED";
export const FETCH_CHANNEL_LIST_MINE_COMPLETED =
  "FETCH_CHANNEL_LIST_MINE_COMPLETED";
export const CREATE_CHANNEL_STARTED = "CREATE_CHANNEL_STARTED";
export const CREATE_CHANNEL_COMPLETED = "CREATE_CHANNEL_COMPLETED";
export const PUBLISH_STARTED = "PUBLISH_STARTED";
export const PUBLISH_COMPLETED = "PUBLISH_COMPLETED";
export const PUBLISH_FAILED = "PUBLISH_FAILED";

// Search
export const SEARCH_STARTED = "SEARCH_STARTED";
export const SEARCH_COMPLETED = "SEARCH_COMPLETED";
export const SEARCH_CANCELLED = "SEARCH_CANCELLED";

// Settings
export const DAEMON_SETTINGS_RECEIVED = "DAEMON_SETTINGS_RECEIVED";
export const CLIENT_SETTING_CHANGED = "CLIENT_SETTING_CHANGED";

// User
export const AUTHENTICATION_STARTED = "AUTHENTICATION_STARTED";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";
export const USER_EMAIL_DECLINE = "USER_EMAIL_DECLINE";
export const USER_EMAIL_NEW_STARTED = "USER_EMAIL_NEW_STARTED";
export const USER_EMAIL_NEW_SUCCESS = "USER_EMAIL_NEW_SUCCESS";
export const USER_EMAIL_NEW_EXISTS = "USER_EMAIL_NEW_EXISTS";
export const USER_EMAIL_NEW_FAILURE = "USER_EMAIL_NEW_FAILURE";
export const USER_EMAIL_VERIFY_STARTED = "USER_EMAIL_VERIFY_STARTED";
export const USER_EMAIL_VERIFY_SUCCESS = "USER_EMAIL_VERIFY_SUCCESS";
export const USER_EMAIL_VERIFY_FAILURE = "USER_EMAIL_VERIFY_FAILURE";
export const USER_IDENTITY_VERIFY_STARTED = "USER_IDENTITY_VERIFY_STARTED";
export const USER_IDENTITY_VERIFY_SUCCESS = "USER_IDENTITY_VERIFY_SUCCESS";
export const USER_IDENTITY_VERIFY_FAILURE = "USER_IDENTITY_VERIFY_FAILURE";
export const USER_FETCH_STARTED = "USER_FETCH_STARTED";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
export const USER_FETCH_FAILURE = "USER_FETCH_FAILURE";
export const FETCH_ACCESS_TOKEN_SUCCESS = "FETCH_ACCESS_TOKEN_SUCCESS";

// Rewards
export const FETCH_REWARDS_STARTED = "FETCH_REWARDS_STARTED";
export const FETCH_REWARDS_COMPLETED = "FETCH_REWARDS_COMPLETED";
export const CLAIM_REWARD_STARTED = "CLAIM_REWARD_STARTED";
export const CLAIM_REWARD_SUCCESS = "CLAIM_REWARD_SUCCESS";
export const CLAIM_REWARD_FAILURE = "CLAIM_REWARD_FAILURE";
export const CLAIM_REWARD_CLEAR_ERROR = "CLAIM_REWARD_CLEAR_ERROR";
export const FETCH_REWARD_CONTENT_COMPLETED = "FETCH_REWARD_CONTENT_COMPLETED";

//Language
export const DOWNLOAD_LANGUAGE_SUCCEEDED = "DOWNLOAD_LANGUAGE_SUCCEEDED";
export const DOWNLOAD_LANGUAGE_FAILED = "DOWNLOAD_LANGUAGE_FAILED";
