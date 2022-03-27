case 'tiktok':
	 case 'tiktokdl':
if (!isUser) return sendButMessage(from, a, b, ton,{quoted : freply}) 
 
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply('Loading.... ')
				play = args.join(" ")
				anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${play}`)
				sendMediaURL(from, anu.result.nowatermark)
				limitAdd(sender, limit) 
					break 
