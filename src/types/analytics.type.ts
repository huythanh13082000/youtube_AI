export interface AnalyticsType {
  countVideo: number
  countShort: number
  videos: string[][]
  fisrtList: {
    title: string
    channelId: string
    channelTitle: string
    description: string
    videoId: string
    uploadDate: string
    thumbnails: {
      default: string
      high: string
      medium: string
    }
    statisticsVideo: {
      viewCount: number
      likeCount: number
      favoriteCount: number
      commentCount: number
    }
    statisticsChannel: {
      viewCount: number
      subscriberCount: number
      videoCount: number
      hiddenSubscriberCount: boolean
      thumbnails: {
        default: string
        high: string
        medium: string
      }
      customUrl: string
    }
  }[]
}
