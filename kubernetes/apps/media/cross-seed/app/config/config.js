module.exports = {
    delay: 20,
    qbittorrentUrl: "http://qbittorrent.default.svc.cluster.local",
    // prowlarrUrl: "http://prowlarr.default.svc.cluster.local",
    // prowlarrApiKey: "{{ .PROWLARR__API_KEY }}",
    // prowlarrTag: "cross-seed",
    torznab: [
      "http://prowlarr.default.svc.cluster.local/1/api?apikey={{ .PROWLARR__API_KEY }}",  // spd
    ],
    action: "inject",
    includeEpisodes: true,
    includeNonVideos: true,
    duplicateCategories: true,
    matchMode: "safe",
    skipRecheck: true,
    linkType: "hardlink",
    linkDir: "/media/Downloads/qbittorrent/complete/cross-seed",
    dataDirs: [
      "/media/Downloads/qbittorrent/complete/prowlarr",
      "/media/Downloads/qbittorrent/complete/radarr",
      "/media/Downloads/qbittorrent/complete/sonarr",
    ],
    outputDir: "/config/xseeds",
    torrentDir: "/config/qBittorrent/BT_backup",
  };
