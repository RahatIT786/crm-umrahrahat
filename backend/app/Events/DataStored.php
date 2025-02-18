<?php

namespace App\Events;

use App\Models\DepartureCity;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class DataStored implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $city;
    /**
     * Create a new event instance.
     */
    public function __construct(DepartureCity $city)
    {
        $this->city=$city;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            // new PrivateChannel('channel-name'),
            new Channel('data-channel'),
        ];
    }

    /**
     * Optional: Customize the broadcast name.
     *
     * @return string
     */
    public function broadcastAs()
    {
        return 'data-stored'; // Custom event name for the frontend
    }

    /**
     * Optional: Include additional data in the broadcast.
     *
     * @return array
     */
    public function broadcastWith()
    {
        return [
            'data' => $this->data,
            'timestamp' => now()->toDateTimeString(),
        ];
    }
}
