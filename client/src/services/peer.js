class PeerService {
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:google.stun.twilio.com:3478",
            ],
          },
        ],
      });
    }
  }

  // Add this method
  addStream(stream) {
    stream.getTracks().forEach((track) => {
      this.peer.addTrack(track, stream);
    });
  }

  // Add the missing getOffer method
  async getOffer() {
    if (this.peer) {
      try {
        const offer = await this.peer.createOffer();
        await this.peer.setLocalDescription(new RTCSessionDescription(offer));
        return offer;
      } catch (error) {
        console.error("Error creating offer:", error);
        throw error;
      }
    }
  }

  async getAnswer(offer) {
    if (this.peer) {
      try {
        await this.peer.setRemoteDescription(new RTCSessionDescription(offer));
        const ans = await this.peer.createAnswer();
        await this.peer.setLocalDescription(new RTCSessionDescription(ans));
        return ans;
      } catch (error) {
        console.error("Error in getAnswer:", error);
        throw error;
      }
    }
  }

  async setLocalDescription(ans) {
    if (this.peer) {
      try {
        // Check if ans is valid before creating RTCSessionDescription
        if (ans && ans.type && ans.sdp) {
          await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
        } else {
          console.error("Invalid answer format:", ans);
        }
      } catch (error) {
        console.error("Error setting remote description:", error);
      }
    }
  }
}

export default new PeerService();
